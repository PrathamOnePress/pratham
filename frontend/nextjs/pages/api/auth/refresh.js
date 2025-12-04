
export default async function handler(req, res){
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  // read csrf cookie from incoming request (double-submit)
  const csrf = req.cookies && req.cookies.pratham_csrf;
  const backendRes = await fetch(backend + "/auth/refresh", { method: "POST", headers: { "x-csrf-token": csrf || "" }, credentials: 'include' });
  const sc = backendRes.headers.get("set-cookie");
  if (sc) res.setHeader("set-cookie", sc);
  const text = await backendRes.text();
  res.status(backendRes.status).send(text);
}
