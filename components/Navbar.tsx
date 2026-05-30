import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#30363D] bg-[#0D1117]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold">THON.DEV</h1>

        <div className="hidden gap-6 text-md font-bold text-gray-400 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
