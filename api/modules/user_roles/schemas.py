from sqlmodel import SQLModel

from modules.user_roles.enums import RolePermission


class RoleCreate(SQLModel):
    name: str
    permissions: list[RolePermission]
