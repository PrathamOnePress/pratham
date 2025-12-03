"use client";
import { useEffect, useState } from "react";

export function useTheme(){
 const [theme,setTheme]=useState("deep-blue-silver");

 useEffect(()=>{
   document.documentElement.setAttribute("data-theme",theme);
 },[theme]);

 return {theme,setTheme};
}