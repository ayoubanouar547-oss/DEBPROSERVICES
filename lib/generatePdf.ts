import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export interface PdfDocumentData {
  documentType: "DEVIS" | "RESERVATION";
  referenceNumber: string;
  isNl?: boolean;
  clientInfo?: {
    nom?: string;
    telephone?: string;
    email?: string;
    ville?: string;
    adresse?: string;
  };
  serviceCategory: string;
  serviceTitle: string;
  subServiceTitle?: string;
  customOptions?: Array<{ label: string; value: string }>;
  urgencyTitle?: string;
  bookingDate?: string;
  timeSlot?: string;
  priceRange?: string;
  message?: string;
  includedGuarantees?: string[];
}

export function generatePdfDocument(data: PdfDocumentData) {
  const isNl = Boolean(data.isNl);
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const primaryColor = [15, 23, 42]; // Slate 900
  const accentBlue = [37, 99, 235];  // Blue 600
  const emeraldColor = [5, 150, 105]; // Emerald 600

  // 1. Header Banner
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 42, "F");

  // Accent Line
  doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2]);
  doc.rect(0, 42, 210, 3, "F");

  // Company Name & Logo Text
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("DEB PRO SERVICES", 14, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225); // Slate 300
  doc.text("Service de Dépannage, Plomberie & Chauffage 24/7 en Belgique", 14, 25);
  doc.text("☎ Tel: +32 492 47 92 01 | 🌐 https://debservices.canalrose.be", 14, 31);
  doc.text("✉ Contact & Interventions rapides partout en Belgique", 14, 37);

  // Document Type Badge
  const badgeTitle = data.documentType === "DEVIS" 
    ? (isNl ? "OFFICIËLE OFFERTE" : "DEVIS ESTIMATIF COMPLET")
    : (isNl ? "RESERVERINGSBEVESTIGING" : "FICHE DE RÉSERVATION");

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(135, 10, 62, 24, 3, 3, "F");

  doc.setTextColor(accentBlue[0], accentBlue[1], accentBlue[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(badgeTitle, 138, 18);

  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(`Réf: ${data.referenceNumber}`, 138, 24);
  doc.text(`Date: ${new Date().toLocaleDateString(isNl ? "nl-BE" : "fr-BE")}`, 138, 29);

  let currentY = 52;

  // 2. Client & Service Header Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, currentY, 182, 38, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(isNl ? "KLANTGEGEVENS & LOCATIE" : "INFORMATIONS CLIENT & LOCALISATION", 20, currentY + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);

  const clientNom = data.clientInfo?.nom || (isNl ? "Niet opgegeven (Web aanvraag)" : "Client Direct (Site Web)");
  const clientTel = data.clientInfo?.telephone || (isNl ? "Onbekend" : "Non spécifié");
  const clientEmail = data.clientInfo?.email || "-";
  const clientVille = data.clientInfo?.ville || "Belgique";

  doc.text(`Nom: ${clientNom}`, 20, currentY + 16);
  doc.text(`Téléphone: ${clientTel}`, 20, currentY + 23);
  doc.text(`Ville / Localité: ${clientVille}`, 105, currentY + 16);
  doc.text(`Email: ${clientEmail}`, 105, currentY + 23);

  if (data.bookingDate) {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(emeraldColor[0], emeraldColor[1], emeraldColor[2]);
    doc.text(`📅 Date choisie: ${data.bookingDate} (${data.timeSlot || "Créneau standard"})`, 20, currentY + 31);
  } else {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(accentBlue[0], accentBlue[1], accentBlue[2]);
    doc.text(`⚡ Urgence & Délai: ${data.urgencyTitle || "Intervention Rapide"}`, 20, currentY + 31);
  }

  currentY += 46;

  // 3. Service Details Section
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text(isNl ? "DETAILS VAN DE AANVRAAG & CONFIGURATIE" : "DÉTAILS DU SERVICE & CONFIGURATION", 14, currentY);

  currentY += 4;

  const tableRows: Array<[string, string]> = [
    [isNl ? "Dienst Categorie" : "Catégorie de Service", data.serviceCategory],
    [isNl ? "Type Interventie" : "Prestation Sélectionnée", data.serviceTitle],
  ];

  if (data.subServiceTitle) {
    tableRows.push([isNl ? "Beschrijving" : "Description Spécifique", data.subServiceTitle]);
  }

  if (data.customOptions && data.customOptions.length > 0) {
    data.customOptions.forEach((opt) => {
      tableRows.push([opt.label, opt.value]);
    });
  }

  if (data.urgencyTitle) {
    tableRows.push([isNl ? "Urgentieniveau / Slot" : "Niveau d'Urgence / Créneau", data.urgencyTitle]);
  }

  autoTable(doc, {
    startY: currentY,
    head: [[isNl ? "Kenmerk" : "Élément du Devis", isNl ? "Geselecteerde Optie / Detail" : "Configuration Sélectionnée"]],
    body: tableRows,
    theme: "striped",
    headStyles: {
      fillColor: primaryColor as [number, number, number],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 9.5,
    },
    bodyStyles: {
      fontSize: 9,
      textColor: [51, 65, 85],
    },
    columnStyles: {
      0: { cellWidth: 70, fontStyle: "bold" },
      1: { cellWidth: 112 },
    },
    margin: { left: 14, right: 14 },
  });

  const finalTable = (doc as any).lastAutoTable;
  currentY = finalTable ? finalTable.finalY + 8 : currentY + 40;

  // 4. Price Estimation Box (if present)
  if (data.priceRange) {
    doc.setFillColor(239, 246, 255); // Blue 50
    doc.setDrawColor(191, 219, 254);
    doc.roundedRect(14, currentY, 182, 22, 3, 3, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 64, 175);
    doc.text(isNl ? "ESTIMATIEF BUDGET / PRIX BRUT ESTIMÉ" : "FOURCHETTE DE PRIX ESTIMATIVE AU COMPTANT :", 20, currentY + 8);

    doc.setFontSize(14);
    doc.setTextColor(37, 99, 235);
    doc.text(`${data.priceRange} TTC (Déplacement & Main d'œuvre inclus)`, 20, currentY + 16);

    currentY += 28;
  }

  // 5. Guarantees & Terms Box
  if (data.includedGuarantees && data.includedGuarantees.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(isNl ? "INBEGREPEN GARANTIES & COMMITMENT" : "GARANTIES & ENGAGEMENT DEB PRO SERVICES", 14, currentY);

    currentY += 4;

    const guaranteeRows = data.includedGuarantees.map((g) => ["✔", g]);

    autoTable(doc, {
      startY: currentY,
      body: guaranteeRows,
      theme: "plain",
      bodyStyles: {
        fontSize: 8.5,
        textColor: [71, 85, 105],
      },
      columnStyles: {
        0: { cellWidth: 8, fontStyle: "bold", textColor: emeraldColor as [number, number, number] },
        1: { cellWidth: 174 },
      },
      margin: { left: 14, right: 14 },
    });

    const gTable = (doc as any).lastAutoTable;
    currentY = gTable ? gTable.finalY + 6 : currentY + 25;
  }

  // 6. Message / Customer Instructions
  if (data.message) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(isNl ? "OPMERKINGEN / BERICHT VAN DE KLANT" : "REMARQUES / INSTRUCTIONS DU CLIENT :", 14, currentY);

    currentY += 4;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);

    const splitMessage = doc.splitTextToSize(data.message, 180);
    doc.text(splitMessage, 14, currentY);

    currentY += splitMessage.length * 4.5 + 4;
  }

  // Footer Disclaimer
  doc.setFillColor(241, 245, 249);
  doc.rect(0, 275, 210, 22, "F");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(
    isNl
      ? "DEB PRO SERVICES — Erkende professionele dienstverlening in België — 24/7 Dépannage & Renovatie"
      : "DEB PRO SERVICES — Entreprise certifiée agréée en Belgique — Dépannage & Rénovation 24h/24 & 7j/7",
    105,
    281,
    { align: "center" }
  );
  doc.text(
    isNl
      ? "Document ter informatie gegenereerd. De definitieve offerte ter plaatse voor de start van de werken blijft bindend."
      : "Document d'estimation préalable. Le devis contradictoire remis sur place avant le début des travaux fait foi.",
    105,
    286,
    { align: "center" }
  );

  // Trigger browser download
  const fileName = `${data.documentType.toLowerCase()}_debpro_${data.referenceNumber}.pdf`;
  doc.save(fileName);
}
