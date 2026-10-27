import { desc } from "drizzle-orm";
import { getDb } from "../../../db";
import { contentItems } from "../../../db/schema";

export async function GET() {
  try {
    const rows = await getDb().select().from(contentItems).orderBy(desc(contentItems.id)).limit(30);
    return Response.json({ items: rows });
  } catch (error) {
    return Response.json({ items: [], demo: true, error: error instanceof Error ? error.message : "Database unavailable" });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as { title?: string; format?: string; status?: string };
    if (!payload.title?.trim()) return Response.json({ error: "title is required" }, { status: 400 });
    const [item] = await getDb().insert(contentItems).values({ title: payload.title.trim(), format: payload.format ?? "talking-head", status: payload.status ?? "draft" }).returning();
    return Response.json({ item }, { status: 201 });
  } catch (error) {
    return Response.json({ accepted: true, demo: true, error: error instanceof Error ? error.message : "Database unavailable" }, { status: 202 });
  }
}
