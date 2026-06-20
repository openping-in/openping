from fastapi import Response

from modules.environment_variable_settings import settings


def set_access_token_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key=settings.jwt_cookie_name,
        value=token,
        httponly=True,
        secure=settings.resolved_cookie_secure,
        samesite=settings.resolved_cookie_samesite,
        max_age=settings.jwt_expire_minutes * 60,
        path="/",
    )
