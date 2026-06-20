from typing import Literal

from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_env: Literal["development", "production"] = "development"
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/openping"
    jwt_secret_key: str = "change-me"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60
    jwt_cookie_name: str = "access_token"
    cookie_secure: bool | None = None
    cookie_samesite: Literal["lax", "none", "strict"] | None = None
    cors_origins: str = ""

    @model_validator(mode="after")
    def validate_cookie_settings(self) -> "Settings":
        if self.cookie_samesite == "none" and not self.resolved_cookie_secure:
            raise ValueError("SameSite=None requires Secure cookies (HTTPS)")
        return self

    @property
    def resolved_cookie_secure(self) -> bool:
        if self.cookie_secure is not None:
            return self.cookie_secure
        return self.app_env == "production"

    @property
    def resolved_cookie_samesite(self) -> Literal["lax", "none", "strict"]:
        if self.cookie_samesite is not None:
            return self.cookie_samesite
        return "none" if self.app_env == "production" else "lax"

    @property
    def resolved_cors_origins(self) -> list[str]:
        if self.cors_origins:
            return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]
        if self.app_env == "development":
            return ["http://localhost:3000", "http://127.0.0.1:3000"]
        return []


settings = Settings()
