import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'content.json');

    // Ensure data directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Read existing
    let content = {};
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      content = JSON.parse(fileData);
    } catch (e) {
      // It's fine if it doesn't exist
    }

    // Update with new content
    content = { ...content, [data.id]: data.value };

    // Write back
    await fs.writeFile(filePath, JSON.stringify(content, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}

export async function GET() {
    try {
      const filePath = path.join(process.cwd(), 'data', 'content.json');
      const fileData = await fs.readFile(filePath, 'utf8');
      return NextResponse.json(JSON.parse(fileData));
    } catch (e) {
      return NextResponse.json({});
    }
}
