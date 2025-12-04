
from sqlmodel import SQLModel, create_engine, Session
import os

DB_URL = os.getenv("PRATHAM_AUTH_DB", "sqlite:///./pratham_auth_cookies.db")
engine = create_engine(DB_URL, echo=False)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
