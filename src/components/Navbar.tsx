"use client";

import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full py-3 bg-[#0C2753] shadow-sm ffixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-10">
          <img src="/images/logo_pcc.png" alt="logo" className="h-12 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-end-safe gap-8 text-sm text-white ml-auto pr-15">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:underline">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:underline">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("struktur")} className="hover:underline">
              Struktur
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("event")} className="hover:underline">
              Event
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("kontak")} className="hover:underline">
              Kontak
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
