import { NextRequest, NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export async function GET(req: NextRequest) {
  try {
    // Optional secret token check to prevent abuse from external bots, while allowing manual triggers
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const sysSecret = process.env.INDEXNOW_SECRET || "deb-pro-indexnow-2026";

    if (token !== sysSecret) {
      return NextResponse.json(
        { error: "Non autorisé. Veuillez fournir un token valide." },
        { status: 401 }
      );
    }

    // 1. Fetch sitemap URLs dynamically from our Next.js sitemap configuration
    const sitemapEntries = sitemap();
    const urlList = sitemapEntries.map((entry) => entry.url);

    if (urlList.length === 0) {
      return NextResponse.json(
        { success: false, error: "Aucun URL trouvé dans le sitemap." },
        { status: 400 }
      );
    }

    // 2. Prepare the payload for IndexNow
    const host = "debservices.canalrose.be";
    const key = "9cac2c8ec76e4e549eec53c9e01977c8";
    const keyLocation = `https://${host}/9cac2c8ec76e4e549eec53c9e01977c8.txt`;

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    // 3. Post to IndexNow API (Bing/Yandex/etc.)
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "URLs soumises avec succès à IndexNow.",
        submittedUrlsCount: urlList.length,
        status: response.status,
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: "La soumission à IndexNow a échoué.",
          status: response.status,
          details: errorText,
        },
        { status: response.status }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la soumission.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const sysSecret = process.env.INDEXNOW_SECRET || "deb-pro-indexnow-2026";

    if (token !== sysSecret) {
      return NextResponse.json(
        { error: "Non autorisé. Veuillez fournir un token valide." },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const host = "debservices.canalrose.be";
    const key = "9cac2c8ec76e4e549eec53c9e01977c8";
    const keyLocation = `https://${host}/9cac2c8ec76e4e549eec53c9e01977c8.txt`;

    let urlList: string[] = body.urlList || [];

    if (urlList.length === 0) {
      const sitemapEntries = sitemap();
      urlList = sitemapEntries.map((entry) => entry.url);
    }

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "URLs soumises avec succès à IndexNow via POST.",
        submittedUrlsCount: urlList.length,
        status: response.status,
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: "La soumission à IndexNow a échoué via POST.",
          status: response.status,
          details: errorText,
        },
        { status: response.status }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la soumission via POST.",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
