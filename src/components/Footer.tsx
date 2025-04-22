// src/components/Footer.tsx
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0C2753] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kiri: Logo dan deskripsi */}
        <div>
          <img src="/images/logo_pcc.png" alt="logo" className="mb-4 h-8" />
          <p className="text-gray-300 text-sm">
            Copyright © {new Date().getFullYear()} Nexcent. All rights reserved.
          </p>
          <div className="flex space-x-3 mt-4">
            <Facebook className="w-5 h-5 text-white hover:text-blue-700 cursor-pointer" />
            <Twitter className="w-5 h-5 text-white hover:text-blue-700 cursor-pointer" />
            <Instagram className="w-5 h-5 text-white hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Center: Company */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Center: Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Kanan: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Stay up to date</h4>
          <form className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 text-black outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
