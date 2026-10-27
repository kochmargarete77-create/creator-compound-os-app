export async function GET() {
  return Response.json({ ok: true, service: "creator-compound-os", boundary: "private-engine" });
}
