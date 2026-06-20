from fastapi import APIRouter, Depends, Response
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.auth import controller
from modules.auth.cookies import set_access_token_cookie
from modules.auth.schemas import LoginRequest, SignupRequest
from modules.db.session import get_session

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/admin-signup")
async def admin_signup(request: SignupRequest, session: AsyncSession = Depends(get_session)):
    return await controller.admin_signup(request, session)


@router.post("/login")
async def login(
    request: LoginRequest,
    response: Response,
    session: AsyncSession = Depends(get_session),
):
    user, access_token = await controller.login(request, session)
    set_access_token_cookie(response, access_token)
    return {"message": "Login successful", "user": user}
