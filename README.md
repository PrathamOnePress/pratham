
PRATHAM ULTRA - Auth Upgrade (httpOnly Cookies + Refresh Rotation + CSRF)
Author: Jawahar R. Mallah
Company: PrathamOne
Date: 2025-12-04

What's in this upgrade:
- FastAPI backend with cookie-based access & refresh tokens
- Refresh token rotation stored in DB and revocation on logout
- Double-submit CSRF token pattern (CSRF cookie + header)
- Next.js frontend updated to use cookie-based flows and server-side APIs
- Dev & Docker run scripts

Security note: Use secure secrets & HTTPS in production. See DEVNOTES_SECURITY.md for details.
