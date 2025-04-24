"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close the menu
    }
  };

  return (
    <nav className="w-full py-3 bg-[#0C2753] shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 ml-2 sm:ml-10">
        <button
          onClick={() => scrollToSection("home")}
           className="flex items-center gap-2 ml-2 sm:ml-10">
           <img src="/images/logo_pcc.png" alt="logo" className="h-12 w-auto" />
        </button>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white ml-auto pr-4">
          <li><button onClick={() => scrollToSection("home")} className="hover:underline">Home</button></li>
          <li><button onClick={() => scrollToSection("about")} className="hover:underline">About Us</button></li>
          <li><button onClick={() => scrollToSection("struktur")} className="hover:underline">Struktur</button></li>
          <li><button onClick={() => scrollToSection("event")} className="hover:underline">Event</button></li>
          <li><button onClick={() => scrollToSection("kontak")} className="hover:underline">Kontak</button></li>
        </ul>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0C2753] text-white text-sm px-4 py-2 space-y-2"
          >
            <li><button onClick={() => scrollToSection("home")} className="block w-full text-left">Home</button></li>
            <li><button onClick={() => scrollToSection("about")} className="block w-full text-left">About us</button></li>
            <li><button onClick={() => scrollToSection("struktur")} className="block w-full text-left">Struktur</button></li>
            <li><button onClick={() => scrollToSection("event")} className="block w-full text-left">Event</button></li>
            <li><button onClick={() => scrollToSection("kontak")} className="block w-full text-left">Kontak</button></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
