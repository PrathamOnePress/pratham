
import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/users/me");
        if (res.ok) {
          const jd = await res.json();
          setUser(jd);
        } else {
          setUser(null);
        }
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function login(email, password) {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);
    const res = await fetch("/api/auth/login", { method: "POST", body: form });
    if (!res.ok) throw new Error("Login failed");
    // cookies set by backend; now load /api/users/me
    const me = await fetch("/api/users/me");
    if (me.ok) setUser(await me.json());
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    Router.push("/login");
  }

  return <AuthContext.Provider value={{user, loading, login, logout}}>{children}</AuthContext.Provider>
}
