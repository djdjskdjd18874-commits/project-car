import type React from "react";
import { useTheme } from "../hooks/useTheme";

const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-6 py-3 
        rounded-full 
        font-semibold 
        shadow-lg 
        transition-all 
        duration-300 
        ease-in-out
        bg-gradient-to-r from-white via-gray-300 to-gray-400 
        text-black dark:text-white
        hover:from-gray-500 hover:to-gray-700 
        dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-800 dark:to-black 
        dark:hover:from-gray-700 dark:hover:to-gray-800
      "
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙  Dark Mode"}
    </button>
  );
};

export default ToggleThemeButton;

