import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className={cn("flex-1")}>{children}</main>
      <Footer />
    </div>
  );
}

import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black border-none">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <img src="/images/LOGO-RB.png" alt="Pheonix Events Logo" className="inline-block h-12 w-12 box-md shadow-md shadow-primary/30 group-hover:rotate-3 transition-transform" />
          <span className="text-2xl tracking-tight font-bold text-[#FFF3F3]">Pheonix</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-lg text-[#FFF3F3]">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#gallery" className="hover:text-primary">Gallery</a>
          <a href="#equipments" className="hover:text-primary">Equipments</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center rounded-md p-2 bg-background border"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 flex flex-col gap-3 text-[#FFF3F3]">
            <a href="#" onClick={() => setOpen(false)} className="py-2">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="py-2">Gallery</a>
            <a href="#equipments" onClick={() => setOpen(false)} className="py-2">Equipments</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-70">© {new Date().getFullYear()} Pheonix</p>
        <p className="opacity-70">
          Crafted with <span className="text-primary">♥</span> for unforgettable moments
        </p>
      </div>
    </footer>
  );
}
