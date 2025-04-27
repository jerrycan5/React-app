import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[var(--background)] text-[var(--foreground)] shadow-md transition-colors duration-300 relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            MyBrand
          </h1>

          {/* Desktop Nav */}
          <nav className="space-x-6 hidden md:block">
            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
            <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
            <Link to="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400">Portfolio</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="text-indigo-600 dark:text-white text-2xl hover:opacity-75 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-[var(--primary)] hover:text-[var(--secondary)] text-3xl md:hidden transition"
              aria-label="Toggle Mobile Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[var(--background)] text-[var(--foreground)] shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
          <div className="flex flex-col p-6 space-y-6">
            <button
              onClick={closeMobileMenu}
              className="self-end text-2xl text-[var(--primary)] hover:text-[var(--secondary)]"
            >
              ✕
            </button>

            <Link to="/" onClick={closeMobileMenu} className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
            <Link to="/portfolio" onClick={closeMobileMenu} className="hover:text-indigo-600 dark:hover:text-indigo-400">Portfolio</Link>
          </div>
        </div>

        {/* Overlay when mobile menu open */}
        {mobileMenuOpen && (
          <div
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-gray-200/20 z-30 md:hidden"
          ></div>
        )}
      </header>
    </>
  );
}

export default Header;
