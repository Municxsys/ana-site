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
      "Ana Casarotti – Mobile Fußpflege, Maniküre & Pediküre in Köln",
    template: "%s | Ana Casarotti",
  },
  description:
    "Mobile kosmetische Fußpflege, Maniküre & Pediküre in Köln und Umgebung. Hausbesuche für eine angenehme und entspannte Behandlung.",
  keywords: [
    "mobile Fußpflege Köln",
    "kosmetische Fußpflege",
    "Pediküre Köln",
    "Maniküre Köln",
    "Hausbesuch Fußpflege",
    "mobile Kosmetik Köln"
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://anacasarotti.de",
    siteName: "Ana Casarotti",
    title:
      "Ana Casarotti – Mobile Fußpflege, Maniküre & Pediküre Köln",
    description:
      "Mobile Fußpflege, Maniküre & Pediküre direkt bei Ihnen zu Hause in Köln und Umgebung.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ana Casarotti – Mobile Fußpflege Köln",
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
