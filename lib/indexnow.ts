import { getSitemapEntries } from "./sitemap-utils";

export interface IndexNowSubmitOptions {
  urls?: string[];
  host?: string;
  key?: string;
}

export interface IndexNowResult {
  success: boolean;
  submittedCount: number;
  status: number;
  message?: string;
  details?: string;
}

/**
 * Sends a list of URLs (or all sitemap URLs if none specified) to IndexNow API.
 * Uses domain: debservices.canalrose.be
 * Key: acf19149f06a4bfe89fdf7c8fa7d602b
 */
export async function submitToIndexNow(
  options: IndexNowSubmitOptions = {}
): Promise<IndexNowResult> {
  const host = options.host || "debservices.canalrose.be";
  const key = options.key || process.env.INDEXNOW_KEY || "acf19149f06a4bfe89fdf7c8fa7d602b";
  const keyLocation = `https://${host}/${key}.txt`;

  let urlList = options.urls || [];

  // If no specific URLs provided, collect all URLs from sitemap
  if (!urlList || urlList.length === 0) {
    const entries = getSitemapEntries();
    urlList = entries.flatMap((entry) => [entry.url, entry.nlUrl]);
  }

  // Remove duplicate URLs
  urlList = Array.from(new Set(urlList));

  if (urlList.length === 0) {
    return {
      success: false,
      submittedCount: 0,
      status: 400,
      details: "Aucun URL fourni ni trouvé dans le sitemap.",
    };
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return {
        success: true,
        submittedCount: urlList.length,
        status: response.status,
        message: `${urlList.length} URL(s) soumise(s) avec succès à IndexNow.`,
      };
    } else {
      const errorText = await response.text();
      return {
        success: false,
        submittedCount: 0,
        status: response.status,
        details: errorText || `Réponse HTTP ${response.status}`,
      };
    }
  } catch (error: any) {
    return {
      success: false,
      submittedCount: 0,
      status: 500,
      details: error?.message || String(error),
    };
  }
}
