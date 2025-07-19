import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const notes = await db.note.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error("NOTES_GET", error);
    return NextResponse.json(
      {
        message: "Failed to fetch notes",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
