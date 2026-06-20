import json

from fastapi import Request
from fastapi.responses import JSONResponse
from jwt import InvalidTokenError
from starlette.datastructures import MutableHeaders
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.responses import Response
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.auth.security import decode_access_token
from modules.db.session import engine
from modules.environment_variable_settings import settings
from modules.user.model import User
from modules.user_roles.model import Role

_PUBLIC_PATHS = {"/health", "/auth/login", "/auth/admin-signup"}


def _is_public_path(path: str) -> bool:
    return path in _PUBLIC_PATHS


def _attach_user_headers(request: Request, user: User, role: Role) -> None:
    headers = MutableHeaders(scope=request.scope)
    headers["x-user-id"] = str(user.id)
    headers["x-user-email"] = user.email
    headers["x-user-first-name"] = user.first_name
    headers["x-user-last-name"] = user.last_name
    headers["x-user-phone"] = json.dumps(
        user.phone.model_dump() if hasattr(user.phone, "model_dump") else user.phone
    )
    headers["x-user-org-name"] = user.org_name
    headers["x-user-address"] = json.dumps(
        user.address.model_dump()
        if hasattr(user.address, "model_dump")
        else user.address
    )
    headers["x-user-org-website"] = user.org_website or ""
    headers["x-user-email-verified"] = str(user.email_verified).lower()
    headers["x-user-phone-verified"] = str(user.phone_verified).lower()
    headers["x-user-aws-credentials-id"] = (
        str(user.aws_credentials_id) if user.aws_credentials_id is not None else ""
    )
    headers["x-role-id"] = str(role.id)
    headers["x-role-type"] = role.role_type
    headers["x-role-permissions"] = ",".join(
        permission.value for permission in role.permissions
    )


class AuthenticationMiddleware(BaseHTTPMiddleware):
    async def dispatch(
        self, request: Request, call_next: RequestResponseEndpoint
    ) -> Response:
        if _is_public_path(request.url.path):
            return await call_next(request)

        token = request.cookies.get(settings.jwt_cookie_name)
        if not token:
            return JSONResponse(
                status_code=401, content={"detail": "Not authenticated"}
            )

        try:
            user_id = decode_access_token(token)
        except InvalidTokenError:
            return JSONResponse(
                status_code=401, content={"detail": "Invalid or expired token"}
            )

        async with AsyncSession(engine) as session:
            user = await session.get(User, user_id)
            if user is None:
                return JSONResponse(
                    status_code=401, content={"detail": "User not found"}
                )

            role = await session.get(Role, user.role_id)
            if role is None:
                return JSONResponse(
                    status_code=401, content={"detail": "Role not found"}
                )

            _attach_user_headers(request, user, role)

        return await call_next(request)
