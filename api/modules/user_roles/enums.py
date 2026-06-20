from enum import StrEnum


class UserRoleType(StrEnum):
    ADMIN = "admin"
    CUSTOM = "custom"


class RolePermission(StrEnum):

    # Contacts
    CREATE_CONTACT = "create_contact"
    CREATE_MULTIPLE_CONTACTS = "create_multiple_contacts"
