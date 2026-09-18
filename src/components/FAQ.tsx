"use client";

import React, { useState } from "react";
import { MAYA_DATA } from "@/data/mayaData";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { faqs } = MAYA_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#faf8f5] py-20 md:py-32 border-b border-[#e5dfd5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="eyebrow inline-block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222924] font-normal leading-tight">
            Understanding the Practice
          </h2>
          <p className="text-base text-[#555f58] font-light max-w-xl mx-auto">
            Essential information regarding Dr. Maya Reynolds’ practice, location, and clinical
            care.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e5dfd5] shadow-2xs overflow-hidden transition-all duration-200 hover:border-[#7ea48d]"
              >
                <h3>
                  <button
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a5646]"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#222924] font-normal">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5d876e] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 text-sm sm:text-base text-[#555f58] font-light leading-relaxed border-t border-[#f5ede0]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
