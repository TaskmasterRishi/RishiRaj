'use client'

import { useState, memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/work', label: 'Our Work' },
    { href: '/services', label: 'Our Services' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-900 to-black text-white p-4 shadow-lg fixed w-full z-50 h-16"
      >
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Logo on the left */}
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors duration-200">
            RishiRaj
          </Link>

          {/* Centered navigation links (desktop) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact button (always visible) */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Contact
              </Link>
            </motion.div>

            {/* Hamburger menu for mobile */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none hover:text-gray-300 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu (separate dropdown) */}
      {isOpen && (
        <>
          {/* Overlay to close the menu when clicked outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden text-white justify-center items-center"
            onClick={() => setIsOpen(false)}
          />
          {/* Mobile menu content */}
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-80 p-4 z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 text-white transition-colors duration-200 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {/* Add padding to the main content to avoid overlap */}
      <div className="pt-16">
        {/* Your main content goes here */}
      </div>
    </>
  );
});

export default Navbar;
