
from fastapi import APIRouter, Depends
from .deps import get_current_user, require_permission
from .models import User
from sqlmodel import Session, select
from .db import engine

router = APIRouter()

@router.get("/me")
def me(user = Depends(get_current_user)):
    return {"email": user.email, "roles": user.roles}

@router.get("/")
def list_users(ok = Depends(require_permission("user.read"))):
    with Session(engine) as session:
        q = session.exec(select(User))
        return [{"email": u.email, "roles": u.roles} for u in q.all()]
