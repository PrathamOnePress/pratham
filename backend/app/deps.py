
from fastapi import Request, HTTPException, Depends
from .token_utils import verify_jwt
from .db import engine
from sqlmodel import Session, select
from .models import User
from .models import RefreshToken
from datetime import datetime

ACCESS_COOKIE_NAME = "pratham_access"

def get_current_user(request: Request):
    token = request.cookies.get(ACCESS_COOKIE_NAME)
    if not token:
        raise HTTPException(status_code=401, detail="not_authenticated")
    payload = verify_jwt(token)
    if not payload:
        raise HTTPException(status_code=401, detail="invalid_token")
    sub = payload.get("sub")
    if not sub:
        raise HTTPException(status_code=401, detail="invalid_token")
    with Session(engine) as session:
        q = session.exec(select(User).where(User.email == sub))
        user = q.one_or_none()
        if not user:
            raise HTTPException(status_code=401, detail="user_not_found")
        return user

def require_permission(permission: str):
    def _dep(user = Depends(get_current_user)):
        role_permissions = {
            "super_admin": ["*"],
            "admin": ["user.read", "user.create", "user.update", "billing.create"],
            "manager": ["user.read", "billing.create"],
            "sales": ["billing.create"],
            "customer": []
        }
        roles = user.roles.split(",") if isinstance(user.roles, str) else user.roles
        user_perms = set()
        for r in roles:
            perms = role_permissions.get(r, [])
            if "*" in perms:
                return True
            user_perms.update(perms)
        if permission not in user_perms:
            raise HTTPException(status_code=403, detail="forbidden")
        return True
    return _dep
