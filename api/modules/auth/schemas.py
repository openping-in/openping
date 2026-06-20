from typing import Optional

from sqlmodel import SQLModel

from modules.aws_credentials.model import AwsCredentialsInput
from modules.user.model import Address, PhoneNumber


class SignupRequest(SQLModel):
    first_name: str
    last_name: str
    phone: PhoneNumber
    org_name: str
    address: Address
    org_website: Optional[str] = None
    email: str
    password: str
    aws_credentials: Optional[AwsCredentialsInput] = None


class LoginRequest(SQLModel):
    email: str
    password: str
