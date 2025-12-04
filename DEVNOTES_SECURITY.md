
Auth Cookies Upgrade - Security Notes (PRATHAM ULTRA)

1. Use HTTPS and set COOKIE_SECURE=true in production.
2. Store PRATHAM_JWT_SECRET in secure secret manager. Do not hardcode.
3. Use short access token life and rotate refresh tokens (implemented here).
4. Use SameSite=strict for sensitive apps if cross-site embedding is not needed.
5. Prefer storing refresh tokens in DB with user agent / fingerprint metadata for better security.
6. Implement rate limiting and monitoring on auth endpoints.
7. Use httpOnly cookies so access tokens are not exposed to JS.
8. Double-submit CSRF cookie pattern: a readable csrf cookie value must be sent in an `x-csrf-token` header for POST actions like /auth/refresh.
