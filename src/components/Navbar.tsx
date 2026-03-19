"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Proje", href: "#proje" },
  { label: "Daireler", href: "#daireler" },
  { label: "Galeri", href: "#galeri" },
  { label: "Konum", href: "#konum" },
  { label: "Tesisler", href: "#tesisler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-playfair-display)] text-[#C9A96E] text-2xl font-semibold tracking-[0.15em]"
          >
            RIVIERA
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F5F0E8] text-sm tracking-[0.1em] uppercase hover:text-[#C9A96E] transition-colors duration-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#iletisim"
            className="hidden lg:block text-sm tracking-[0.08em] uppercase border border-[#C9A96E] text-[#C9A96E] px-6 py-2.5 rounded hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500"
          >
            Randevu Al
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={clsx(
                "w-6 h-px bg-[#C9A96E] transition-all duration-500",
                mobileOpen && "rotate-45 translate-y-[3.5px]"
              )}
            />
            <span
              className={clsx(
                "w-6 h-px bg-[#C9A96E] transition-all duration-500",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "w-6 h-px bg-[#C9A96E] transition-all duration-500",
                mobileOpen && "-rotate-45 -translate-y-[3.5px]"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-700 bg-[#0A0A0A]/98 backdrop-blur-md",
          mobileOpen ? "max-h-[500px] border-b border-[#1F1F1F]" : "max-h-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#F5F0E8] text-sm tracking-[0.1em] uppercase hover:text-[#C9A96E] transition-colors duration-500 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setMobileOpen(false)}
            className="text-sm tracking-[0.08em] uppercase border border-[#C9A96E] text-[#C9A96E] px-6 py-2.5 rounded text-center hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-500 mt-2"
          >
            Randevu Al
          </a>
        </div>
      </div>
    </nav>
  );
}
