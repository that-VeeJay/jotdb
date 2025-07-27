import "server-only";

import { db } from "../prisma";
import { requireUser } from "./user";
import type { NotePreview } from "../types";

export async function getNotesPreview(userId: string): Promise<NotePreview[]> {
  await requireUser();

  return db.note.findMany({
    where: { userId },
    select: {
      id: true,
      title: true,
      createdAt: true,
      categoryId: true,
    },
  });
}
