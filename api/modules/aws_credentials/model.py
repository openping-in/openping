from typing import Optional

from sqlmodel import Field, SQLModel


class AwsCredentialsInput(SQLModel):
    access_key_id: str
    secret_access_key: str
    region: str


class AwsCredentials(AwsCredentialsInput, table=True):
    __tablename__ = "aws_credentials"

    id: Optional[int] = Field(default=None, primary_key=True)
