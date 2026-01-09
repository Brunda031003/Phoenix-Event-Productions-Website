import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/90 border-b border-white/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-20">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 ml-2 md:ml-6 group"
        >
          <img
            src="/images/LOGO-RB.png"
            alt="Phoenix Logo"
            className="
              h-11 w-11
              drop-shadow-[0_0_12px_rgba(239,35,60,0.8)]
              transition-transform duration-300
              group-hover:rotate-3 group-hover:scale-105
            "
          />
          <span className="text-xl font-bold tracking-wide text-white">
            Phoenix
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm uppercase tracking-wide">
          <a href="/#home" className="hover:text-red-500 transition">Home</a>
          <a href="/#about" className="hover:text-red-500 transition">About</a>
          <a href="/#gallery" className="hover:text-red-500 transition">Gallery</a>
          <a href="/#equipments" className="hover:text-red-500 transition">Equipments</a>
          <a href="/#contact" className="hover:text-red-500 transition">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#equipments">Equipments</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
