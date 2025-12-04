
export default async function handler(req, res){
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  // Proxy the form body through to backend and forward cookies
  const backendRes = await fetch(backend + "/auth/login", { method: "POST", body: req.body });
  const text = await backendRes.text();
  // forward set-cookie headers to client
  const sc = backendRes.headers.get("set-cookie");
  if (sc) {
    res.setHeader("set-cookie", sc);
  }
  res.status(backendRes.status).send(text);
}
