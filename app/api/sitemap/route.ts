// Redirect the user requested /api/sitemap route to the canonical next.js /sitemap.xml
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.APP_URL || 'https://debproservices.be';
  return NextResponse.redirect(`${baseUrl}/sitemap.xml`);
}
