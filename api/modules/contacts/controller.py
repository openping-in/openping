from pathlib import Path

from fastapi import HTTPException, Request, UploadFile, status
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.contacts.model import Contact
from modules.contacts.parser import iter_contact_rows
from modules.contacts.schemas import ContactCreate

_ALLOWED_EXTENSIONS = {".csv", ".xlsx", ".xls"}
_BATCH_SIZE = 5000


async def create_contact(
    request: Request, body: ContactCreate, session: AsyncSession
) -> dict:
    owner_id_header = request.headers.get("x-user-id")
    if not owner_id_header:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )

    contact = Contact(**body.model_dump(), owner_id=int(owner_id_header))
    session.add(contact)
    await session.commit()
    await session.refresh(contact)

    return {
        "message": "Contact created",
        "contact": contact.model_dump(),
    }


async def upload_contacts(
    request: Request, file: UploadFile, session: AsyncSession
) -> dict:
    extension = Path(file.filename or "").suffix.lower()
    if extension not in _ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only CSV and Excel files are allowed",
        )

    owner_id_header = request.headers.get("x-user-id")
    if not owner_id_header:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )

    await file.seek(0)

    try:
        contact_rows = iter_contact_rows(file.file, file.filename or "")
    except ValueError as error:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(error),
        ) from error

    owner_id = int(owner_id_header)
    batch: list[Contact] = []
    count = 0

    for contact_row in contact_rows:
        batch.append(Contact(**contact_row, owner_id=owner_id))
        if len(batch) >= _BATCH_SIZE:
            session.add_all(batch)
            await session.commit()
            count += len(batch)
            batch.clear()

    if batch:
        session.add_all(batch)
        await session.commit()
        count += len(batch)

    if count == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No valid contacts found in file",
        )

    return {
        "message": "Contacts created",
        "filename": file.filename,
        "count": count,
    }
