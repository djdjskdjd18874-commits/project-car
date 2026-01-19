
import { useEffect, useState } from "react";


type Theme = "light" | "dark";

export const useTheme = () => {  

const [theme, setTheme] = useState<Theme>(  ()=>{

    if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as Theme) || "light";
    }
    return "light";
});
const toggleTheme = () => {
   setTheme((prev => {
        return prev === "light" ? "dark" : "light";
    }));
}




const setDarkMode = () => setTheme("dark");
const setLightMode = () => setTheme("light");
useEffect(() => {
  const root = document.documentElement; 

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);


return { theme, toggleTheme, setDarkMode, setLightMode };

};