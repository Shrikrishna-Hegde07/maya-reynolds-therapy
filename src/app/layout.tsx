import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mayareynoldstherapy.com"),
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, California providing warm, collaborative, evidence-based therapy for adults navigating anxiety, panic, trauma, EMDR, burnout, and perfectionism. In-person and CA telehealth.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Santa Monica psychologist",
    "Santa Monica therapist",
    "therapy in Santa Monica",
    "clinical psychologist California",
    "EMDR therapy Santa Monica",
    "anxiety psychologist Santa Monica",
    "trauma therapy California",
    "burnout counseling professionals",
    "California telehealth therapy",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica",
    description:
      "Grounded, collaborative therapy for adults feeling overwhelmed by anxiety, stress, trauma, or burnout. Santa Monica office & California telehealth.",
    url: "https://mayareynoldstherapy.com",
    siteName: "Dr. Maya Reynolds Psychology Practice",
    images: [
      {
        url: "/images/maya/dr-maya-reynolds.png",
        width: 1024,
        height: 1536,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
