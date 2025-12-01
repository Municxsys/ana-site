import "../styles/globals.css";
import "../styles/animations.css";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anacasarotti.de"),
  title: {
    default:
      "Ana Casarotti – Medizinische Fußpflege & Kosmetik Köln (Hausbesuche)",
    template: "%s | Ana Casarotti",
  },
  description:
    "Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung. Hausbesuche mit Herz, Fachkompetenz und Hygienestandard.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title:
      "Ana Casarotti – Medizinische Fußpflege & Kosmetik Köln (Hausbesuche)",
    description:
      "Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung. Hausbesuche mit Herz, Fachkompetenz und Hygienestandard.",
    url: "/",
    siteName: "Ana Casarotti",
    images: ["/images/og-preview.jpg"],
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
