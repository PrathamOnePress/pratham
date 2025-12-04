
export default async function handler(req, res){
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  // forward cookies automatically from browser in production; in Next dev we must forward cookie header
  const cookie = req.headers.cookie || '';
  const backendRes = await fetch(backend + "/users/me", { headers: { cookie } , credentials: 'include' });
  const json = await backendRes.json();
  res.status(backendRes.status).json(json);
}
