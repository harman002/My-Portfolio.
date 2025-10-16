// src/components/Navbar.jsx
import { useState } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Harmandeep<span className="text-blue-400">Singh</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
         
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
