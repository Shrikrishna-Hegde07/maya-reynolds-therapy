"use client";

import React from "react";
import Link from "next/link";
import { MAYA_DATA } from "@/data/mayaData";
import { MapPin, Video, Calendar, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const { footer } = MAYA_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c2922] text-[#d6ded8] pt-20 pb-12 border-t border-[#2d4035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2d4035]">
          {/* Practice Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {footer.therapist}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#7ea48d] font-semibold mt-1">
                {footer.subtitle}
              </span>
            </div>

            <p className="text-sm text-[#a9b7ae] font-light leading-relaxed max-w-sm pt-2">
              Warm, collaborative, and grounded therapy for adults in Santa Monica and across
              California.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold text-[#1c2922] bg-[#cfded3] hover:bg-white transition-colors rounded-sm cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Office Location & Care Options */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              {footer.officeTitle}
            </h4>
            <div className="space-y-2 text-sm text-[#a9b7ae] font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7ea48d] shrink-0 mt-1" />
                <div>
                  <p>{footer.address}</p>
                  <p>{footer.cityStateZip}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 text-xs text-[#cfded3]">
                <Video className="w-4 h-4 text-[#7ea48d] shrink-0 mt-0.5" />
                <span>{footer.telehealthNotice}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation & Project Review Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footer.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#a9b7ae] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/clone"
                  className="text-[#7ea48d] hover:text-white underline transition-colors"
                >
                  View Conejo Clone (Part 1) →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7e8f83] font-light">
          <p className="max-w-2xl text-center md:text-left">
            {footer.disclaimer}
          </p>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#273a30] text-[#cfded3] hover:text-white hover:bg-[#3a5646] transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
