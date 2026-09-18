"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#222924] selection:bg-[#3a5646] selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Intro / Welcome */}
        <Intro />

        {/* 4. Who I Work With */}
        <WhoWeHelp />

        {/* 5. Therapy Services (Exactly 3) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 6. About Dr. Maya Reynolds */}
        <About />

        {/* 7. My Approach */}
        <Approach />

        {/* 8. Areas of Focus */}
        <Specialties />

        {/* 9. OUR OFFICE — Custom Section (Part 3) */}
        <Office onOpenBooking={handleOpenBooking} />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Book an Appointment CTA */}
        <CTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Request Modal */}
      <AppointmentModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
