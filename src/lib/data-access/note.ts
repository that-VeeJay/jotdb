import "server-only";

import { db } from "../prisma";
import type { NotePreview } from "../types";

export async function getNotesPreview(userId: string): Promise<NotePreview[]> {
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
