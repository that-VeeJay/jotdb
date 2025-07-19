import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const notes = await db.note.findMany();
  return NextResponse.json(notes);
}
