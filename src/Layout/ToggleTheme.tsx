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
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
        text-white 
        hover:from-yellow-500 hover:to-yellow-700 
        dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-black 
        dark:hover:from-gray-600 dark:hover:to-gray-900
      "
    >
      {theme === "light" ? "🌙  Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ToggleThemeButton;

