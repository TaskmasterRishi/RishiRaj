"use client";

import React from "react";
import { FaInstagram, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-4 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} RishiRaj Corporation. All rights reserved.
            </p>
            <p className="text-sm mb-2">
              Verified by the Government of India&apos;s Department PESO.
            </p>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/rishirajcorporation?igsh=M3JwMmszcThzc21o"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center mx-auto p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
