"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wide font-serif">
              ⚔️ Goal Conquest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gold">
            <Link
              href="/about"
              className="hover:text-gold transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/new-features"
              className="hover:text-gold transition-colors duration-200"
            >
              New Features
            </Link>
            <Link
              href="/new-features"
              className="hover:text-gold transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gold focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
            <Link
              href="/about"
              className="hover:text-gold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/new-features"
              className="hover:text-gold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              New Features
            </Link>
            <Link
              href="/new-features"
              className="hover:text-gold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
