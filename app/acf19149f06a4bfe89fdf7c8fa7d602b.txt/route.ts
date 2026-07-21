export async function GET() {
  return new Response("acf19149f06a4bfe89fdf7c8fa7d602b", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
