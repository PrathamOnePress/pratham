
import os, jwt, secrets
from datetime import datetime, timedelta
JWT_SECRET = os.getenv("PRATHAM_JWT_SECRET", "change_this_secret")
ALGORITHM = "HS256"
ACCESS_EXPIRE_MIN = int(os.getenv("ACCESS_EXPIRE_MIN", "15"))
REFRESH_EXPIRE_DAYS = int(os.getenv("REFRESH_EXPIRE_DAYS", "7"))

def create_access_token(subject: str, roles=None, expires_delta=None):
    to_encode = {"sub": subject, "roles": roles or []}
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_EXPIRE_MIN))
    to_encode.update({"exp": expire, "type":"access"})
    return jwt.encode(to_encode, JWT_SECRET, algorithm=ALGORITHM)

def create_refresh_token():
    # use a random opaque token for rotation (store in DB)
    return secrets.token_urlsafe(64)

def verify_jwt(token: str):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        return payload
    except Exception:
        return None
