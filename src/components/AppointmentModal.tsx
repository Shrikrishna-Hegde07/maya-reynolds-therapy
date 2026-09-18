"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, MapPin, Video } from "lucide-react";
import { MAYA_DATA } from "@/data/mayaData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "in-person",
    concern: "anxiety-panic",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#e5dfd5] overflow-hidden p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#555f58] hover:text-[#222924] rounded-full hover:bg-[#e6ede8] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#5d876e] font-semibold">
                Initial Consultation Inquiry
              </span>
              <h3
                id="booking-modal-title"
                className="font-serif text-2xl sm:text-3xl text-[#222924] font-normal mt-1"
              >
                Request an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#555f58] font-light mt-2">
                Dr. Maya Reynolds offers in-person therapy in Santa Monica, CA, and secure telehealth
                for clients across California.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="First and last name"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dfd5] text-sm text-[#222924] focus:outline-none focus:border-[#3a5646] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dfd5] text-sm text-[#222924] focus:outline-none focus:border-[#3a5646] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-1.5">
                  Session Format *
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                      formData.sessionType === "in-person"
                        ? "bg-[#e8eee8] border-[#5d876e] text-[#273a30] font-semibold"
                        : "bg-white border-[#e5dfd5] text-[#555f58]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="in-person"
                      checked={formData.sessionType === "in-person"}
                      onChange={(e) =>
                        setFormData({ ...formData, sessionType: e.target.value })
                      }
                      className="sr-only"
                    />
                    <MapPin className="w-4 h-4 text-[#5d876e] shrink-0" />
                    <span>In-Person (Santa Monica)</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                      formData.sessionType === "telehealth"
                        ? "bg-[#e8eee8] border-[#5d876e] text-[#273a30] font-semibold"
                        : "bg-white border-[#e5dfd5] text-[#555f58]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="telehealth"
                      checked={formData.sessionType === "telehealth"}
                      onChange={(e) =>
                        setFormData({ ...formData, sessionType: e.target.value })
                      }
                      className="sr-only"
                    />
                    <Video className="w-4 h-4 text-[#5d876e] shrink-0" />
                    <span>Telehealth (California)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-1.5">
                  Primary Area of Focus *
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dfd5] text-sm text-[#222924] focus:outline-none focus:border-[#3a5646] transition-colors"
                >
                  <option value="anxiety-panic">Anxiety & Panic</option>
                  <option value="trauma-emdr">Trauma & EMDR</option>
                  <option value="burnout-perfectionism">
                    Burnout, Perfectionism & High Internal Pressure
                  </option>
                  <option value="earlier-life">
                    Earlier Life Experiences & Chronic Stress
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-1.5">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any questions or what you are hoping to address in therapy..."
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#e5dfd5] text-sm text-[#222924] focus:outline-none focus:border-[#3a5646] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs tracking-[0.18em] uppercase font-semibold text-white bg-[#3a5646] hover:bg-[#273a30] transition-colors rounded-xl shadow-soft cursor-pointer"
                >
                  Submit Consultation Request
                </button>
              </div>

              <p className="text-[11px] text-[#78716c] text-center pt-1 font-light">
                Sessions are confidential. Serving adults in Santa Monica & across California.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#e8eee8] text-[#3a5646] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#222924] font-normal">
              Inquiry Received
            </h3>
            <p className="text-sm text-[#555f58] font-light max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name}. Dr. Maya Reynolds will review your consultation request
              for {formData.sessionType === "in-person" ? "in-person Santa Monica" : "California telehealth"} therapy.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#3a5646] bg-[#e8eee8] hover:bg-[#cfded3] rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
