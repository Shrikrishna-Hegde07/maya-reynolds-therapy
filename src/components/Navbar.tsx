"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Who I Work With", href: "#who-i-help" },
    { label: "Services", href: "#services" },
    { label: "My Approach", href: "#approach" },
    { label: "Areas of Focus", href: "#focus" },
    { label: "Our Office", href: "#office" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Subtle Assignment Switcher Banner */}
      <div className="bg-[#273a30] text-[#e6ede8] text-xs py-2 px-4 border-b border-[#3a5646]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#7ea48d] animate-pulse" />
            <span className="font-medium text-[11px] sm:text-xs">
              Dr. Maya Reynolds, PsyD — Santa Monica Psychology Practice
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#a9c4b2] hidden md:inline">
              In-person Santa Monica & California Telehealth
            </span>
            <Link
              href="/clone"
              aria-label="View Part 1: Conejo Valley Counseling Clone"
              className="inline-flex items-center gap-1 text-[#f4f7f5] hover:text-[#cfded3] font-semibold underline underline-offset-2 transition-colors"
            >
              <span>View Part 1: Conejo Clone</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-soft py-3 border-b border-[#e5dfd5]"
            : "bg-[#faf8f5] py-5 border-b border-[#e5dfd5]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Practice Identity */}
            <a
              href="#"
              className="group flex flex-col transition-opacity hover:opacity-90"
              aria-label="Dr. Maya Reynolds, PsyD Practice Home"
            >
              <span className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] text-[#222924] font-medium tracking-tight group-hover:text-[#3a5646] transition-colors">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-[#5d876e] uppercase font-medium">
                Licensed Clinical Psychologist • Santa Monica, CA
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-[0.14em] uppercase text-[#44403c] hover:text-[#3a5646] font-medium transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5d876e] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#office"
                className="hidden lg:inline-flex items-center text-xs tracking-[0.14em] uppercase text-[#476c56] hover:text-[#273a30] font-semibold px-3 py-2 transition-colors"
              >
                Santa Monica Office
              </a>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-[#3a5646] hover:bg-[#273a30] active:scale-[0.98] transition-all rounded-sm shadow-soft cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden inline-flex items-center px-3 py-1.5 text-[10px] tracking-wider uppercase font-semibold text-white bg-[#3a5646] rounded-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#222924] hover:text-[#3a5646] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a5646]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#faf8f5] border-b border-[#e5dfd5] px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
            <div className="text-xs text-[#5d876e] tracking-widest uppercase font-semibold pb-2 border-b border-[#e5dfd5]">
              Navigation
            </div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-[#222924] hover:text-[#3a5646] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e5dfd5] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs tracking-[0.16em] uppercase font-semibold text-white bg-[#3a5646] hover:bg-[#273a30] transition-colors rounded-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
              <Link
                href="/clone"
                className="block text-center text-xs text-[#616a64] hover:text-[#222924] py-1 font-medium"
              >
                Switch to Part 1 Clone →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
