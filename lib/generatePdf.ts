import { jsPDF } from "jspdf";

export interface PdfDocumentData {
  documentType?: string;
  referenceNumber?: string;
  isNl?: boolean;
  clientInfo?: {
    nom?: string;
    telephone?: string;
    email?: string;
    adresse?: string;
    ville?: string;
    tva?: string;
  };
  clientName?: string;
  clientPhone?: string;
  clientEmail?: string;
  clientAddress?: string;
  serviceCategory?: string;
  serviceTitle?: string;
  subServiceTitle?: string;
  cityName?: string;
  estimatedPrice?: string | number;
  priceRange?: string;
  details?: string;
  message?: string;
  customOptions?: Array<{ label: string; value: string }>;
  urgencyTitle?: string;
  includedGuarantees?: string[];
  bookingDate?: string;
  timeSlot?: string;
  date?: string;
}

export async function generatePdfDocument(data: PdfDocumentData): Promise<void> {
  const isNl = Boolean(data.isNl);
  const refNum = data.referenceNumber || `DEV-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = data.date || new Date().toLocaleDateString(isNl ? "nl-BE" : "fr-BE");

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const clientNom = data.clientInfo?.nom || data.clientName || "Client";
  const clientTel = data.clientInfo?.telephone || data.clientPhone || "-";
  const clientEmail = data.clientInfo?.email || data.clientEmail || "-";
  const clientVille = data.clientInfo?.ville || data.cityName || data.clientInfo?.adresse || data.clientAddress || "-";

  const mainService = data.serviceTitle || data.serviceCategory || (isNl ? "Interventie & Depannage" : "Intervention & Depannage");
  const priceDisplay = data.priceRange || (data.estimatedPrice ? (typeof data.estimatedPrice === "number" ? `${data.estimatedPrice} EUR` : String(data.estimatedPrice)) : (isNl ? "Op offerte / Ter plaatse" : "Sur devis / Sur place"));

  // Colors
  const primaryColor = [30, 58, 138]; // Deep blue
  const accentColor = [220, 38, 38]; // Red accent
  const darkTextColor = [31, 41, 55];
  const grayBg = [243, 244, 246];

  // Header band
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 26, "F");

  // Company Name
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("PRO SERVICE", 15, 13);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.text(isNl ? "Spoedinterventie 24/7 in heel Belgie" : "Depannage & Interventions Rapides 24/7 en Belgique", 15, 20);

  // Phone
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("0465 99 60 76", 195, 15, { align: "right" });

  // Document Header Title
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  const docTitle = data.documentType ? (data.documentType === "RESERVATION" ? (isNl ? "RESERVATIEBEVESTIGING" : "CONFIRMATION DE RESERVATION") : (isNl ? "OFFERTE ESTIMATIEF" : "DEVIS ESTIMATIF")) : (isNl ? "OFFERTE ESTIMATIEF" : "DEVIS ESTIMATIF");
  doc.text(docTitle, 15, 38);

  doc.setFontSize(9.5);
  doc.setTextColor(100, 116, 139);
  doc.setFont("helvetica", "normal");
  doc.text(`Ref : ${refNum}`, 15, 44);
  doc.text(`Date : ${dateStr}`, 195, 44, { align: "right" });

  // Line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(15, 48, 195, 48);

  // Provider Box (Left)
  doc.setFillColor(grayBg[0], grayBg[1], grayBg[2]);
  doc.roundedRect(15, 53, 88, 42, 2, 2, "F");

  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(isNl ? "DIENSTVERLENER" : "PRESTATAIRE DE SERVICE", 20, 60);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.text("PRO SERVICE BELGIQUE", 20, 67);
  doc.text(isNl ? "24/7 Nooddienst" : "Service d'urgence 24h/24 et 7j/7", 20, 72);
  doc.text("Tel : +32 498 35 25 88", 20, 77);
  doc.text("Email : contact@canalrose.be", 20, 82);
  doc.text(isNl ? "Belgie" : "Belgique", 20, 87);

  // Client Box (Right)
  doc.setFillColor(grayBg[0], grayBg[1], grayBg[2]);
  doc.roundedRect(107, 53, 88, 42, 2, 2, "F");

  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(isNl ? "KLANT / BESTEMMING" : "CLIENT / DESTINATAIRE", 112, 60);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.text(`${isNl ? "Naam" : "Nom"} : ${clientNom}`, 112, 67);
  doc.text(`Tel : ${clientTel}`, 112, 72);
  doc.text(`Email : ${clientEmail}`, 112, 77);
  doc.text(`${isNl ? "Stad / Adres" : "Ville / Adresse"} : ${clientVille}`, 112, 82);

  // Table Section
  let startY = 102;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(15, startY, 180, 7, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text(isNl ? "BESCHRIJVING VAN DE INTERVENTIE" : "DESCRIPTION DE L'INTERVENTION", 20, startY + 5);
  doc.text(isNl ? "GESCHAT BEDRAG" : "MONTANT ESTIMEE", 190, startY + 5, { align: "right" });

  // Main row box
  startY += 7;
  let boxHeight = 28;
  if (data.customOptions && data.customOptions.length > 0) {
    boxHeight += data.customOptions.length * 5;
  }

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, startY, 180, boxHeight, "D");

  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(mainService, 20, startY + 7);

  let detailsY = startY + 13;
  if (data.subServiceTitle) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(data.subServiceTitle, 20, detailsY);
    detailsY += 5;
  }

  if (data.message || data.details) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const msgText = data.message || data.details || "";
    const splitMsg = doc.splitTextToSize(msgText, 120);
    doc.text(splitMsg, 20, detailsY);
    detailsY += splitMsg.length * 4;
  }

  if (data.customOptions && data.customOptions.length > 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    data.customOptions.forEach((opt) => {
      doc.text(`- ${opt.label}: ${opt.value}`, 20, detailsY);
      detailsY += 4.5;
    });
  }

  // Price column
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(priceDisplay, 190, startY + 10, { align: "right" });

  // Summary box
  let summaryY = startY + boxHeight + 6;
  doc.setFillColor(grayBg[0], grayBg[1], grayBg[2]);
  doc.roundedRect(110, summaryY, 85, 22, 2, 2, "F");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(darkTextColor[0], darkTextColor[1], darkTextColor[2]);
  doc.text(isNl ? "Totale Schatting :" : "Estimation Totale :", 115, summaryY + 9);

  doc.setFontSize(13);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(priceDisplay, 190, summaryY + 9, { align: "right" });

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(isNl ? "Inclusief BTW & verplaatsing" : "TVA & deplacement inclus sous reserve de diagnostic", 115, summaryY + 16);

  // Notice Section
  let noticeY = summaryY + 30;
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(isNl ? "BELANGRIJKE INFORMATIE :" : "INFORMATIONS IMPORTANTES :", 15, noticeY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  const notices = isNl
    ? [
        "- Dit document is een gratis en vrijblijvende prijsindicatie.",
        "- De definitieve kostprijs wordt ter plaatse bevestigd met de technicus voor aanvang van de werken.",
        "- Snelle interventie binnen 30 tot 60 minuten over heel Belgie.",
        "- Garantie op wisselstukken en werkuren."
      ]
    : [
        "- Ce document constitue une estimation prealable et gratuite sans engagement.",
        "- L'intervention definitive et le cout exact sont valides sur place avec le technicien avant tout debut de travaux.",
        "- Deplacement rapide sous 30 a 60 minutes en Belgique.",
        "- Garantie sur toutes nos pieces et main-d'oeuvre."
      ];

  notices.forEach((note, idx) => {
    doc.text(note, 15, noticeY + 5 + idx * 4.5);
  });

  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setDrawColor(226, 232, 240);
  doc.line(15, pageHeight - 16, 195, pageHeight - 16);

  doc.setFontSize(7.5);
  doc.setTextColor(156, 163, 175);
  doc.text("PRO SERVICE - Depannage urgent 24/7 en Belgique - Tel: 0465 99 60 76 - Email: contact@canalrose.be", 105, pageHeight - 9, { align: "center" });

  // Immediate Save / Download
  const fileName = `devis_debpro_${refNum}.pdf`;
  doc.save(fileName);
}
