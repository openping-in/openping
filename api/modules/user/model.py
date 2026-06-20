from typing import Optional

from sqlalchemy import Column
from sqlalchemy.dialects.postgresql import JSONB
from sqlmodel import Field, SQLModel


class Address(SQLModel):
    country: str
    postal_code: str
    address_line_1: str
    address_line_2: Optional[str] = None


class PhoneNumber(SQLModel):
    country_code: str
    number: str


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    phone: PhoneNumber = Field(sa_column=Column(JSONB, nullable=False))
    org_name: str
    address: Address = Field(sa_column=Column(JSONB, nullable=False))
    org_website: Optional[str] = None
    email: str = Field(unique=True, index=True)
    password: str
    aws_credentials_id: Optional[int] = Field(
        default=None, foreign_key="aws_credentials.id"
    )
    email_verified: bool = Field(default=False)
    phone_verified: bool = Field(default=False)
    role_id: int = Field(foreign_key="roles.id")