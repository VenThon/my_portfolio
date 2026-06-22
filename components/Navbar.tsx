"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#educations" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#30363D] bg-[#0D1117]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <h1 className="text-lg font-bold sm:text-xl">THON.DEV</h1>

        <div className="hidden gap-6 text-sm font-bold text-gray-300 md:flex lg:text-base">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md text-gray-300 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#30363D] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-bold text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
