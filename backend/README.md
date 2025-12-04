
PRATHAM ULTRA - Auth (Cookies) Backend

Run (dev):
1. python -m venv .venv
2. source .venv/bin/activate
3. pip install -r requirements.txt
4. uvicorn app.main:app --reload --port 8000

Notes:
- COOKIE_SECURE=false in dev; set to true in production and serve over HTTPS.
- CSRF: frontend must send header 'x-csrf-token' with value from 'pratham_csrf' cookie for /auth/refresh requests.
- Refresh token rotation stored in DB ensures single-use refresh tokens.
