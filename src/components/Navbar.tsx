// src/components/Navbar.tsx
"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo_pcc.png" alt="logo" className="h-6" />
          <span className="font-bold text-xl text-blue-600">PCC</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-end-safe gap-8 text-sm text-gray-600 ml-auto pr-15">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>

        {/* Button */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 text-sm">Login</button>
          <button className="bg-green-600 text-white text-sm px-5 py-2 rounded hover:bg-green-700">
            Register Now
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
