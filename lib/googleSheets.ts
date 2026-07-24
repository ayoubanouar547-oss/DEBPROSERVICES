/**
 * Robust helper to send lead data to Google Apps Script Web App (Google Sheets).
 * Handles HTTP 302 redirects properly without dropping POST payload,
 * and falls back gracefully.
 */
export async function postToGoogleSheets(scriptUrl: string, payload: Record<string, any>) {
  if (!scriptUrl || typeof scriptUrl !== "string" || !scriptUrl.startsWith("http")) {
    console.error("[GoogleSheets] Invalid script URL:", scriptUrl);
    return { success: false, error: "Invalid URL" };
  }

  try {
    const body = JSON.stringify(payload);
    console.log(`[GoogleSheets] Sending payload to ${scriptUrl}`);

    // Try 1: Standard POST with redirect follow
    // We use text/plain to avoid CORS preflight which can be tricky with GAS
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: body,
      redirect: "follow",
    });

    if (response.ok || response.status === 200) {
      console.log(`[GoogleSheets] Success (POST follow). Status: ${response.status}`);
      return { success: true, method: "POST_FOLLOW" };
    }

    // Try 2: Manual redirect handling if follow didn't work as expected
    const res2 = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: body,
      redirect: "manual",
    });

    if (res2.status === 302 || res2.status === 307) {
      const location = res2.headers.get("location");
      if (location) {
        console.log(`[GoogleSheets] Manual redirect to: ${location}`);
        // For GAS, the redirect is usually to a GET page that confirms receipt
        await fetch(location, { method: "GET" });
        return { success: true, method: "POST_MANUAL_REDIRECT" };
      }
    }

    // Try 3: GET fallback (some GAS scripts use doGet instead of doPost for simplicity)
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => params.append(k, String(v)));
    const getUrl = `${scriptUrl}${scriptUrl.includes("?") ? "&" : "?"}${params.toString()}`;
    
    console.log(`[GoogleSheets] Trying GET fallback...`);
    const res3 = await fetch(getUrl, { method: "GET" });
    
    if (res3.ok) {
      console.log(`[GoogleSheets] Success on GET fallback.`);
      return { success: true, method: "GET_FALLBACK" };
    }

    console.error(`[GoogleSheets] All attempts failed. Last status: ${res3.status}`);
    return { success: false, status: res3.status };
  } catch (err) {
    console.error("[GoogleSheets] Critical error:", err);
    return { success: false, error: String(err) };
  }
}
