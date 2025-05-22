"use client";

import React from "react";
import { FaInstagram, FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-4 relative"
    >
      {/* Arrow at top center */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <FaArrowUp size={16} />
        </button>
      </motion.div>
      
      <div className="container mx-auto pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.p 
              className="text-sm mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              &copy; {new Date().getFullYear()} RishiRaj Corporation. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-sm mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Verified by the Government of India&apos;s Department PESO.
            </motion.p>
            <motion.div 
              className="flex space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="flex space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://www.instagram.com/rishirajcorporation?igsh=M3JwMmszcThzc21o"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
