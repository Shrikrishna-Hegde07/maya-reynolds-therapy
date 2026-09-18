"use client";

import React, { useState } from "react";
import { CONEJO_DATA } from "@/data/conejoData";
import { Menu, X, ChevronDown } from "lucide-react";

export default function CloneNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { header } = CONEJO_DATA;

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/95 backdrop-blur-sm border-b border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#home" className="flex flex-col text-left group">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-[#2f3832] uppercase font-light">
              {header.logoText}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#788277] uppercase font-medium">
              {header.logoSubtext}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {header.navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-xs tracking-[0.14em] uppercase text-[#3b443e] hover:text-[#7d6550] transition-colors font-medium py-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 text-[#788277]" />}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-64 bg-[#faf7f2] border border-[#eae3d5] shadow-lg py-3 rounded-sm z-50 animate-fadeIn">
                    {link.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={link.href}
                        className="block px-4 py-2 text-xs text-[#424d46] hover:bg-[#f0e8dc] hover:text-[#262e2a] transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={header.ctaHref}
              className="inline-block px-5 py-3 text-xs tracking-[0.16em] uppercase font-semibold text-[#faf7f2] bg-[#758474] hover:bg-[#5f6e5e] transition-colors rounded-sm text-center"
            >
              {header.ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2f3832] hover:text-[#758474] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-b border-[#eae3d5] px-6 py-6 space-y-4 shadow-xl">
          {header.navLinks.map((link) => (
            <div key={link.label} className="border-b border-[#f0e9dc] pb-3">
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm tracking-[0.14em] uppercase text-[#2f3832] font-medium py-1"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="pl-4 mt-2 space-y-1">
                  {link.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-[#67726b] py-1 hover:text-[#2f3832]"
                    >
                      • {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <a
              href={header.ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center text-xs tracking-[0.16em] uppercase font-semibold text-[#faf7f2] bg-[#758474] hover:bg-[#5f6e5e] transition-colors rounded-sm"
            >
              {header.ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
