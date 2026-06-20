from typing import Optional

from sqlmodel import SQLModel

from modules.user.model import PhoneNumber


class ContactCreate(SQLModel):
    name: str
    phone: PhoneNumber
    instagram_username: Optional[str] = None
    facebook_user_id: Optional[str] = None
