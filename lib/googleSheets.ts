/**
 * Robust helper to send lead data to Google Apps Script Web App (Google Sheets).
 * Handles HTTP 302 redirects properly without dropping POST payload,
 * and falls back gracefully.
 */
export async function postToGoogleSheets(scriptUrl: string, payload: Record<string, any>) {
  if (!scriptUrl || typeof scriptUrl !== "string" || !scriptUrl.startsWith("http")) {
    return;
  }

  try {
    const jsonString = JSON.stringify(payload);

    // 1. Send POST with text/plain (avoids CORS preflight & header stripping)
    // and redirect: "manual" so node-fetch doesn't convert 302 POST to GET.
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: jsonString,
      redirect: "manual",
    });

    console.log(`[GoogleSheets] POST sent to script. HTTP Status: ${res.status}`);

    // If redirect returned (302 or 307) or 200, Google Apps Script executed doPost(e)
    if (res.status === 200 || res.status === 302 || res.status === 307 || res.status === 0) {
      return { success: true, status: res.status };
    }

    // 2. Secondary fallback with query parameters in case doPost relies on GET or URL params
    const queryParams = new URLSearchParams();
    for (const [key, val] of Object.entries(payload)) {
      if (typeof val === "string" || typeof val === "number") {
        queryParams.append(key, String(val));
      }
    }
    const fallbackUrl = `${scriptUrl}?${queryParams.toString()}`;

    await fetch(fallbackUrl, {
      method: "GET",
      redirect: "follow",
    });

    return { success: true, fallback: true };
  } catch (err) {
    console.error("[GoogleSheets] Error posting to Google Apps Script:", err);
    return { success: false, error: String(err) };
  }
}
