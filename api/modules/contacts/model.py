from typing import Optional

from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel

from modules.user.model import PhoneNumber


class Contact(SQLModel, table=True):
    __tablename__ = "contacts"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    phone: PhoneNumber = Field(sa_column=Column(JSONB, nullable=False))
    instagram_username: Optional[str] = None
    facebook_user_id: Optional[str] = None
    owner_id: int = Field(
        foreign_key="users.id",
        description="The user who uploaded and owns this contact.",
    )
