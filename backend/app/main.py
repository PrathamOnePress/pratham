
from fastapi import FastAPI
from .auth import router as auth_router
from .users import router as users_router
from .db import create_db_and_tables

app = FastAPI(title="PRATHAM ULTRA - Auth Service (Cookies)")

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(users_router, prefix="/users", tags=["users"])

@app.on_event("startup")
def startup():
    create_db_and_tables()

@app.get("/health")
def health():
    return {"status":"ok","service":"pratham-auth-cookies"}
