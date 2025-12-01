import "../styles/globals.css";
import "../styles/animations.css";

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anacasarotti.de"),
  title: {
    default:
      "Ana Casarotti – Medizinische Fußpflege, Maniküre & Pediküre Köln",
    template: "%s | Ana Casarotti",
  },
  description:
    "Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung. Hausbesuche mit Herz, Fachkompetenz und Hygienestandard.",
  keywords: [
    "Fußpflege Köln",
    "medizinische Fußpflege",
    "Pediküre Köln",
    "Maniküre Köln",
    "mobile Fußpflege",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://anacasarotti.de",
    siteName: "Ana Casarotti",
    title:
      "Ana Casarotti – Medizinische Fußpflege, Maniküre & Pediküre Köln",
    description:
      "Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ana Casarotti – Fußpflege & Kosmetik",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
