import React from "react";
import { useTheme } from "../context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitchButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
      <div className="theme-switch-container">
        <button
          className="theme-switch-button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    );
  };

export default ThemeSwitchButton;
