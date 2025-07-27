import "server-only";

import { db } from "../prisma";
import { requireUser } from "./user";
import type { Category } from "../types";
import { formatString } from "../utils";

export async function getCategories(userId: string): Promise<Category[]> {
  await requireUser();

  return db.category.findMany({
    where: { userId },
  });
}

export async function createCategory(newCategory: string, userId: string) {
  return db.$transaction(async (tx) => {
    const existing = await tx.category.findFirst({
      where: {
        name: {
          equals: newCategory,
          mode: "insensitive",
        },
        userId,
      },
    });

    if (existing)
      throw new Error(`${formatString(newCategory)} category already exists.`);

    await tx.category.create({
      data: {
        name: newCategory,
        userId: userId,
      },
    });
  });
}
