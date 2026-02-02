"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

<Link href="/contact" className="hover:text-indigo-600">
  Contact
</Link>


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Flutix
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="#service" className="hover:text-indigo-600">
              Services
            </Link>
            <Link href="#about" className="hover:text-indigo-600">
              About
            </Link>
            <Link href="#contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-indigo-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 hover:bg-indigo-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-indigo-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-indigo-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
