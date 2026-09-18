import type { Metadata } from "next";
import ClonePage from "@/components/clone/ClonePage";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling | Original Homepage Clone (Part 1)",
  description:
    "Exact UI reproduction and structural clone of Conejo Valley Family Counseling homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CloneRoute() {
  return <ClonePage />;
}
