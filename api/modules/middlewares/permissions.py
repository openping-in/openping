from collections.abc import Callable
from functools import wraps

from fastapi import HTTPException, Request, status

from modules.user_roles.enums import RolePermission, UserRoleType


def _check_permissions(request: Request, *required_permissions: RolePermission) -> None:
    role_type = request.headers.get("x-role-type")
    if role_type == UserRoleType.ADMIN:
        return

    permissions_header = request.headers.get("x-role-permissions", "")
    role_permissions = {
        RolePermission(permission)
        for permission in permissions_header.split(",")
        if permission
    }

    if not all(permission in role_permissions for permission in required_permissions):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Insufficient permissions",
        )


def require_permissions(*required_permissions: RolePermission) -> Callable:
    def decorator(func: Callable) -> Callable:
        @wraps(func)
        async def wrapper(*args, **kwargs):
            request = kwargs.get("request")
            if request is None:
                for arg in args:
                    if isinstance(arg, Request):
                        request = arg
                        break
            if request is None:
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail="Request not found",
                )

            _check_permissions(request, *required_permissions)
            return await func(*args, **kwargs)

        return wrapper

    return decorator
