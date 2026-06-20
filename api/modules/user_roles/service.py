from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from modules.user_roles.enums import RolePermission, UserRoleType
from modules.user_roles.model import Role

ADMIN_ROLE_NAME = "admin"


async def get_or_create_admin_role(session: AsyncSession) -> Role:
    result = await session.exec(select(Role).where(Role.name == ADMIN_ROLE_NAME))
    role = result.first()
    if role:
        return role

    role = Role(
        name=ADMIN_ROLE_NAME,
        role_type=UserRoleType.ADMIN,
        permissions=list(RolePermission),
    )
    session.add(role)
    await session.flush()
    return role


async def resolve_user_role_type(session: AsyncSession, role_id: int) -> UserRoleType:
    role = await session.get(Role, role_id)
    if role is None:
        raise ValueError(f"Role {role_id} not found")
    return role.role_type
