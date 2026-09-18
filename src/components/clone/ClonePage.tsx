import React from "react";
import Link from "next/link";
import CloneNavbar from "./CloneNavbar";
import CloneHero from "./CloneHero";
import CloneHope from "./CloneHope";
import CloneWhoWeHelp from "./CloneWhoWeHelp";
import CloneQuoteBanner from "./CloneQuoteBanner";
import CloneExpertise from "./CloneExpertise";
import CloneHowWeWork from "./CloneHowWeWork";
import CloneStatementBanner from "./CloneStatementBanner";
import CloneSpecialties from "./CloneSpecialties";
import CloneAppointmentCTA from "./CloneAppointmentCTA";
import CloneFooter from "./CloneFooter";

export default function ClonePage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans text-[#2f3832]">
      {/* Top Banner indicating Part 1 Clone */}
      <div className="bg-[#2f3832] text-[#f7f4ed] px-4 py-2.5 text-center text-xs tracking-wider flex items-center justify-between border-b border-[#444e47]">
        <span className="font-medium">
          Part 1: Conejo Valley Family Counseling (Original Reference Clone)
        </span>
        <Link
          href="/"
          aria-label="View Dr. Maya Reynolds Redesign"
          className="underline hover:text-[#b5c4af] transition-colors font-semibold ml-4"
        >
          View Dr. Maya Reynolds Redesign →
        </Link>
      </div>

      <CloneNavbar />
      <main>
        <CloneHero />
        <CloneHope />
        <CloneWhoWeHelp />
        <CloneQuoteBanner />
        <CloneExpertise />
        <CloneHowWeWork />
        <CloneStatementBanner />
        <CloneSpecialties />
        <CloneAppointmentCTA />
      </main>
      <CloneFooter />
    </div>
  );
}
