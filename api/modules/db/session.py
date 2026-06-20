from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel import SQLModel
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.environment_variable_settings import settings

engine = create_async_engine(settings.database_url, echo=False)


async def init_db() -> None:
    # Import models so they register with SQLModel.metadata before create_all.
    from modules.aws_credentials import model as aws_credentials_model  # noqa: F401
    from modules.contacts import model as contacts_model  # noqa: F401
    from modules.user import model  # noqa: F401
    from modules.user_roles import model as user_roles_model  # noqa: F401

    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSession(engine) as session:
        yield session
