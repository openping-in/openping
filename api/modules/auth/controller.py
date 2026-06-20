from fastapi import HTTPException, status
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.auth.schemas import LoginRequest, SignupRequest
from modules.auth.security import create_access_token, hash_password, verify_password
from modules.aws_credentials.model import AwsCredentials
from modules.user.model import User
from modules.user_roles.service import get_or_create_admin_role


async def admin_signup(request: SignupRequest, session: AsyncSession) -> dict:
    result = await session.exec(select(User).where(User.email == request.email))
    if result.first():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    aws_credentials_id = None
    if request.aws_credentials:
        aws_credentials = AwsCredentials(**request.aws_credentials.model_dump())
        session.add(aws_credentials)
        await session.flush()
        aws_credentials_id = aws_credentials.id

    admin_role = await get_or_create_admin_role(session)
    assert admin_role.id is not None

    user = User(
        **request.model_dump(exclude={"aws_credentials", "password"}),
        aws_credentials_id=aws_credentials_id,
        password=hash_password(request.password),
        role_id=admin_role.id,
    )
    session.add(user)
    await session.commit()
    await session.refresh(user)

    return {
        "message": "Signup successful",
        "user": user.model_dump(exclude={"password"}),
    }


async def login(request: LoginRequest, session: AsyncSession) -> tuple[dict, str]:
    result = await session.exec(select(User).where(User.email == request.email))
    user = result.first()
    if not user or not verify_password(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    assert user.id is not None
    access_token = create_access_token(user.id)

    return user.model_dump(exclude={"password"}), access_token
