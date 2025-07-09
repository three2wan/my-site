import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import type { Section } from "../page";

type NavbarProps = {
  sections: Section[];
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  sections,
  activeSection,
  setActiveSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionClass = "text-gray-700 dark:text-gray-200";
  const activeClass = "text-black dark:text-white font-semibold";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="px-4 sm:px-8 py-3 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-10"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg tracking-tight text-gray-900 dark:text-white">
          Syazwan.dev
        </span>
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex gap-6 items-center">
          {sections.map((section) => (
            <button
              key={section}
              className={`text-sm px-2 py-1 rounded transition-colors ${
                activeSection === section ? activeClass : sectionClass
              } hover:text-black dark:hover:text-white`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 mt-3 sm:hidden"
          >
            {sections.map((section) => (
              <button
                key={section}
                className={`text-sm px-2 py-2 rounded transition-colors text-left ${
                  activeSection === section ? activeClass : sectionClass
                } hover:text-black dark:hover:text-white`}
                onClick={() => {
                  setActiveSection(section);
                  setMenuOpen(false);
                }}
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
