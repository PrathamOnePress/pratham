
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage(){
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function submit(e){
    e.preventDefault();
    try{
      await login(email, password);
      window.location.href = "/";
    }catch(ex){
      setErr("Login failed: " + ex.message);
    }
  }

  return (<div style={{maxWidth:400, margin:"40px auto"}}>
    <h2>PrathamOne — Sign in (Cookie-based)</h2>
    <form onSubmit={submit}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /><br/><br/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password" /><br/><br/>
      <button type="submit">Login</button>
    </form>
    {err && <div style={{color:"red"}}>{err}</div>}
  </div>)
}
