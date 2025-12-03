"use client";
import { useEffect, useState } from "react";
export function useTheme(){
 const [theme,setTheme]=useState(typeof window !== "undefined"? localStorage.getItem("theme") || "deep-blue-silver":"deep-blue-silver");
 useEffect(()=>{ document.documentElement.setAttribute("data-theme",theme); localStorage.setItem("theme", theme); },[theme]);
 return {theme,setTheme};
}