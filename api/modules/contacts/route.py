from fastapi import APIRouter, Depends, File, Request, UploadFile
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.contacts import controller
from modules.contacts.schemas import ContactCreate
from modules.db.session import get_session
from modules.middlewares import require_permissions
from modules.user_roles.enums import RolePermission

router = APIRouter(prefix="/contacts", tags=["contacts"])


@router.post("/")
@require_permissions(RolePermission.CREATE_CONTACT)
async def create_contact(
    request: Request,
    body: ContactCreate,
    session: AsyncSession = Depends(get_session),
):
    return await controller.create_contact(request, body, session)


@router.post("/upload")
@require_permissions(RolePermission.CREATE_CONTACT)
async def upload_contacts(
    request: Request,
    file: UploadFile = File(...),
    session: AsyncSession = Depends(get_session),
):
    return await controller.upload_contacts(request, file, session)
