
export default async function handler(req, res){
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  const backendRes = await fetch(backend + "/auth/logout", { method: "POST", credentials: 'include' });
  const sc = backendRes.headers.get("set-cookie");
  if (sc) res.setHeader("set-cookie", sc);
  const text = await backendRes.text();
  res.status(backendRes.status).send(text);
}
