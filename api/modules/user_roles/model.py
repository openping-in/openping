from typing import Optional

from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel

from modules.user_roles.enums import RolePermission, UserRoleType


class Role(SQLModel, table=True):
    __tablename__ = "roles"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True, index=True)
    role_type: UserRoleType = Field(sa_column=Column(String, nullable=False))
    permissions: list[RolePermission] = Field(sa_column=Column(JSONB, nullable=False))
