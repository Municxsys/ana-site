import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const amountParam = searchParams.get("amount");

    if (!amountParam) {
      return new NextResponse("amount missing", { status: 400 });
    }

    const numericAmount = parseInt(amountParam, 10);

    if (![20, 50, 100, 150].includes(numericAmount)) {
      return new NextResponse("invalid amount", { status: 400 });
    }

    // Vorlage laden (2-seitiges PDF wie dein Screenshot)
    const templatePath = path.join(
      process.cwd(),
      "public",
      "pdfs",
      "gutschein-vorlage.pdf"
    );
    const templateBytes = fs.readFileSync(templatePath);

    const pdfDoc = await PDFDocument.load(templateBytes);
    const pages = pdfDoc.getPages();

    // zweite Seite, dort steht "Wert" usw.
    const backPage = pages[1];
    const { width, height } = backPage.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const display = `€ ${numericAmount},00`;
    const fontSize = 32;
    const textWidth = font.widthOfTextAtSize(display, fontSize);

    backPage.drawText(display, {
      x: width / 2 - textWidth / 2,
      y: height * 0.47, // mittig im Wert-Block
      size: fontSize,
      color: rgb(0.07, 0.33, 0.12), // dunkles Grün wie Brand
    });

    const pdfBytes = await pdfDoc.save();

    // Buffer aus Uint8Array erstellen für NextResponse
    const pdfBuffer = Buffer.from(pdfBytes);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="gutschein-${numericAmount}.pdf"`,
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("PDF error", { status: 500 });
  }
}
