import React from "react";
import { CONEJO_DATA } from "@/data/conejoData";

export default function CloneFooter() {
  const { footer, header } = CONEJO_DATA;

  return (
    <footer className="bg-[#2a332d] text-[#e3ded4] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#3e4a42]">
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.16em] uppercase text-white font-light">
                {header.logoText}
              </span>
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#a5b4a7] font-medium">
                {header.logoSubtext}
              </span>
            </div>
            <p className="text-sm text-[#b8c2b9] font-light max-w-md leading-relaxed pt-2">
              {footer.description}
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Office Location
            </h4>
            <p className="text-xs text-[#b8c2b9] font-light leading-relaxed">
              {footer.address}
            </p>
            <div className="pt-2 text-xs space-y-1">
              <p className="text-[#a5b4a7]">{footer.phone}</p>
              <p className="text-[#a5b4a7]">{footer.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs tracking-[0.18em] uppercase text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footer.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#b8c2b9] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#849286] font-light gap-4">
          <p>{footer.legalText}</p>
          <p>© {new Date().getFullYear()} Conejo Valley Family Counseling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
