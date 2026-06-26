import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaCross } from "react-icons/fa";



export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="p-2 flex items-center justify-center w-12 h-12 
             bg-yellow-500 dark:bg-gray-700 
             rounded-full transition-all active:scale-95"
>
  {theme === "dark" ? (
    <FiSun className="text-yellow-300 text-2xl drop-shadow-[0_0_6px_rgba(255,255,0,0.6)]"/>
  ) : (
    <FaCross className="text-slate-200 text-2xl drop-shadow-[0_0_6px_rgba(150,200,255,0.5)] w-5" />
  )}
</button>
  );
}

