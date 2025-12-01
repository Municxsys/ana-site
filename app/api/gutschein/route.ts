// app/api/gutschein/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

const ALLOWED_AMOUNTS = [20, 50, 100, 150];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawAmount = body?.amount;

    const numericAmount = Number(
      typeof rawAmount === "string"
        ? rawAmount.replace(",", ".")
        : rawAmount
    );

    if (!Number.isFinite(numericAmount)) {
      return NextResponse.json({ error: "Ungültiger Betrag." }, { status: 400 });
    }

    if (!ALLOWED_AMOUNTS.includes(numericAmount)) {
      return NextResponse.json(
        { error: "Erlaubte Werte: 20 €, 50 €, 100 €, 150 €." },
        { status: 400 }
      );
    }

    // PDF-Vorlage laden
    const templatePath = path.join(
      process.cwd(),
      "public",
      "pdfs",
      "gutschein-vorlage.pdf"
    );

    const templateBytes = await fs.readFile(templatePath);

    // PDF öffnen
    const pdfDoc = await PDFDocument.load(templateBytes);

    // *** WICHTIG: Seite 2 auswählen ***
    const pages = pdfDoc.getPages();
    const page = pages[1]; // Seite 2 (index 1)

    const { width, height } = page.getSize();

    // Betrag formatieren
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const amountLabel =
      "€ " +
      numericAmount.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    const fontSize = 24;
    const textWidth = font.widthOfTextAtSize(amountLabel, fontSize);

    // Basierend auf deinem Screenshot geschätzt:
    const x = (width - textWidth) / 2;
    const y = height * 0.56; // << hier sitzt "WERT:" → tunen wir dann

    page.drawText(amountLabel, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.08, 0.3, 0.22),
    });

    // Speichern
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });

    return new NextResponse(pdfBlob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="gutschein-${numericAmount}.pdf"`,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Fehler beim Erstellen des Gutscheins." },
      { status: 500 }
    );
  }
}
