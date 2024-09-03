"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "tiles", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent">
      <div className="lg:hidden top-8 right-2 absolute">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill={isOpen ? "none" : "#D0164B"}
            stroke={isOpen ? "#D0164B" : "currentColor"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex list-none flex m-0 p-0">
        {navLinks.map(({ id, label }, index) => (
          <li key={index} className="mx-2.5">
            <button
              onClick={() => scrollToSection(id)}
              className="text-white no-underline text-lg hover:text-cusred"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-16 right-0 w-30 bg-black"
          >
            <ul className="flex flex-col items-center list-none p-4">
              {navLinks.map(({ id, label }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index }}
                  className="my-2"
                >
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-white no-underline text-lg hover:text-cusred"
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
