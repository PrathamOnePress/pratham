
from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from datetime import datetime
from typing import List
from sqlmodel import SQLModel, Column, String

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    roles: str = Field(default="customer")  # comma-separated roles for simplicity
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class RefreshToken(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    token: str = Field(index=True, unique=True)
    user_email: str = Field(index=True)
    revoked: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    expires_at: datetime = Field(default_factory=datetime.utcnow)
