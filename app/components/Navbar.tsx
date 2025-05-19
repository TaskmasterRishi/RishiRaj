'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/work', label: 'Our Work' },
    { href: '/services', label: 'Our Services' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors duration-200">
          RishiRaj
        </Link>

        {/* Centered navigation links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact button on the right */}
        <div className="flex items-center space-x-8">
          <Link
            href="/contact"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-gray-300 transition-colors duration-200"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Contact button */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
