import "./globals.css";

export const metadata = {
  title: "Ana Casarotti",
  description: "Maniküre, Pediküre & Medizinische Fußpflege"
};

export default function RootLayout({children}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}