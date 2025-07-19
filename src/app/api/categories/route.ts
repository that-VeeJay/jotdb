import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const notes = await db.category.findMany();
  return NextResponse.json(notes, { status: 200 });
}
