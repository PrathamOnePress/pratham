
from fastapi import APIRouter, Depends, HTTPException, Response, Request, Cookie
from fastapi.security import OAuth2PasswordRequestForm
from .db import engine, create_db_and_tables, get_session
from sqlmodel import Session, select
from .models import User, RefreshToken
from .schemas import UserCreate, TokenOut
from passlib.context import CryptContext
from .token_utils import create_access_token, create_refresh_token, verify_jwt, REFRESH_EXPIRE_DAYS, ACCESS_EXPIRE_MIN
from datetime import datetime, timedelta
import os
from sqlmodel import Session
from dotenv import load_dotenv
load_dotenv()

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")
router = APIRouter()

COOKIE_SECURE = os.getenv("COOKIE_SECURE", "false").lower() == "true"
COOKIE_SAMESITE = os.getenv("COOKIE_SAMESITE", "lax")  # 'strict' recommended in prod
ACCESS_COOKIE_NAME = "pratham_access"
REFRESH_COOKIE_NAME = "pratham_refresh"
CSRF_COOKIE_NAME = "pratham_csrf"  # readable by JS, double-submit

@router.post("/register")
def register(payload: UserCreate):
    with Session(engine) as session:
        q = session.exec(select(User).where(User.email == payload.email))
        if q.one_or_none():
            raise HTTPException(status_code=400, detail="email_exists")
        user = User(email=payload.email, hashed_password=pwd.hash(payload.password), roles=",".join(payload.roles or ["customer"]))
        session.add(user)
        session.commit()
        return {"msg":"user_created","email":user.email}

@router.post("/login")
def login(response: Response, form_data: OAuth2PasswordRequestForm = Depends()):
    with Session(engine) as session:
        q = session.exec(select(User).where(User.email == form_data.username))
        user = q.one_or_none()
        if not user or not pwd.verify(form_data.password, user.hashed_password):
            raise HTTPException(status_code=400, detail="invalid_credentials")
        # create JWT access (short lived) and opaque refresh stored in DB
        access_token = create_access_token(subject=user.email, roles=user.roles.split(","))
        refresh_token = create_refresh_token()
        expires_at = datetime.utcnow() + timedelta(days=int(os.getenv("REFRESH_EXPIRE_DAYS", "7")))
        rt = RefreshToken(token=refresh_token, user_email=user.email, revoked=False, expires_at=expires_at)
        session.add(rt); session.commit()
        # set cookies
        # CSRF token (random) - readable by JS
        csrf = secrets.token_urlsafe(16)
        response.set_cookie(ACCESS_COOKIE_NAME, access_token, httponly=True, secure=COOKIE_SECURE, samesite=COOKIE_SAMESITE, max_age=ACCESS_EXPIRE_MIN*60)
        response.set_cookie(REFRESH_COOKIE_NAME, refresh_token, httponly=True, secure=COOKIE_SECURE, samesite=COOKIE_SAMESITE, max_age=REFRESH_EXPIRE_DAYS*24*3600)
        response.set_cookie(CSRF_COOKIE_NAME, csrf, httponly=False, secure=COOKIE_SECURE, samesite=COOKIE_SAMESITE, max_age=REFRESH_EXPIRE_DAYS*24*3600)
        return {"msg":"logged_in"}

@router.post("/refresh")
def refresh(response: Response, refresh_token: str = Cookie(None), csrf_header: str = None, request: Request = None):
    # double-submit CSRF check: header must match csrf cookie
    csrf_cookie = request.cookies.get(CSRF_COOKIE_NAME)
    if not csrf_cookie or csrf_header != csrf_cookie:
        raise HTTPException(status_code=401, detail="csrf_mismatch")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="no_refresh_cookie")
    with Session(engine) as session:
        q = session.exec(select(RefreshToken).where(RefreshToken.token == refresh_token))
        rt = q.one_or_none()
        if not rt or rt.revoked:
            raise HTTPException(status_code=401, detail="invalid_refresh")
        # rotate: revoke existing and issue new refresh token
        rt.revoked = True
        session.add(rt)
        new_refresh = create_refresh_token()
        expires_at = datetime.utcnow() + timedelta(days=int(os.getenv("REFRESH_EXPIRE_DAYS", "7")))
        new_rt = RefreshToken(token=new_refresh, user_email=rt.user_email, revoked=False, expires_at=expires_at)
        session.add(new_rt); session.commit()
        # new access token
        access_token = create_access_token(subject=rt.user_email, roles=[])
        # set cookies (overwrite)
        response.set_cookie(ACCESS_COOKIE_NAME, access_token, httponly=True, secure=COOKIE_SECURE, samesite=COOKIE_SAMESITE, max_age=ACCESS_EXPIRE_MIN*60)
        response.set_cookie(REFRESH_COOKIE_NAME, new_refresh, httponly=True, secure=COOKIE_SECURE, samesite=COOKIE_SAMESITE, max_age=REFRESH_EXPIRE_DAYS*24*3600)
        return {"msg":"refreshed"}

@router.post("/logout")
def logout(response: Response, refresh_token: str = Cookie(None)):
    if refresh_token:
        with Session(engine) as session:
            q = session.exec(select(RefreshToken).where(RefreshToken.token == refresh_token))
            rt = q.one_or_none()
            if rt:
                rt.revoked = True
                session.add(rt); session.commit()
    # clear cookies
    response.delete_cookie(ACCESS_COOKIE_NAME)
    response.delete_cookie(REFRESH_COOKIE_NAME)
    response.delete_cookie(CSRF_COOKIE_NAME)
    return {"msg":"logged_out"}
