import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[var(--background)] text-[var(--foreground)] shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--primary)]">MyBrand</h1>

          <nav className="space-x-6 hidden md:block">
            <Link
              to="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Portfolio
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-indigo-600 dark:text-white text-2xl hover:opacity-75 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>

            {/* Mobile Menu */}
            <button className="text-[var(--primary)] hover:text-[var(--secondary)] transition">
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
