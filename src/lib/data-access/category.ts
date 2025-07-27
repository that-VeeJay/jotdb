import "server-only";

import { db } from "../prisma";
import { requireUser } from "./user";
import type { Category } from "../types";

export async function getCategories(userId: string): Promise<Category[]> {
  await requireUser();

  return db.category.findMany({
    where: { userId },
  });
}
