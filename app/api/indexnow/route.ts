import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

const SYS_SECRET = process.env.INDEXNOW_SECRET || "deb-pro-indexnow-2026";

/**
 * GET /api/indexnow?token=deb-pro-indexnow-2026
 * Submits all sitemap URLs to IndexNow (Bing/Yandex/Seznam)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (token && token !== SYS_SECRET) {
      return NextResponse.json(
        { error: "Non autorisé. Jeton de sécurité invalide." },
        { status: 401 }
      );
    }

    const result = await submitToIndexNow();

    return NextResponse.json(
      {
        success: result.success,
        message: result.message || "Traitement terminé.",
        submittedUrlsCount: result.submittedCount,
        status: result.status,
        details: result.details,
      },
      { status: result.status === 200 || result.status === 202 ? 200 : result.status }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur lors de la soumission IndexNow.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/indexnow
 * Body: { "urlList": ["https://debservices.canalrose.be/page1"] }
 * Submits explicit list of URLs (or all sitemap URLs if body empty) to IndexNow
 */
export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (token && token !== SYS_SECRET) {
      return NextResponse.json(
        { error: "Non autorisé. Jeton de sécurité invalide." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const urlList: string[] = Array.isArray(body.urlList) ? body.urlList : [];

    const result = await submitToIndexNow({ urls: urlList });

    return NextResponse.json(
      {
        success: result.success,
        message: result.message || "Traitement terminé.",
        submittedUrlsCount: result.submittedCount,
        status: result.status,
        details: result.details,
      },
      { status: result.status === 200 || result.status === 202 ? 200 : result.status }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Erreur serveur lors de la soumission IndexNow via POST.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
