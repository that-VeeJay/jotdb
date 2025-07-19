import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  if (!categoryId) {
    return NextResponse.json({ error: "Missing categoryId" }, { status: 400 });
  }

  const notes = await db.note.findMany({
    where: { categoryId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
    },
  });

  return NextResponse.json(notes, { status: 200 });
}
