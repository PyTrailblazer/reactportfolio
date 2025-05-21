import React, { useState, useEffect } from "react";
import "./style.css";
import { assets } from "../../assets/img/assets";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Загружаем сохранённую тему при монтировании компонента
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  // Обновляем тему и сохраняем в localStorage при переключении
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className={`slider ${isDark ? "dark" : "light"}`}>
        <img
          src={isDark ? assets.moon : assets.sun}
          alt={isDark ? "Dark mode" : "Light mode"}
          className="slider-icon"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

