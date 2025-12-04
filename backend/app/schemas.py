
from pydantic import BaseModel
from typing import List, Optional

class UserCreate(BaseModel):
    email: str
    password: str
    roles: Optional[List[str]] = []

class TokenOut(BaseModel):
    msg: str
