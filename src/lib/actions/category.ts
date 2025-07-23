"use server";

import { db } from "../prisma";

export async function createCategory(categoryName: string, userId: string) {
  if (!categoryName || !userId) return;

  const normalized = categoryName.trim().toLowerCase();

  const existing = await db.category.findFirst({
    where: {
      userId,
      name: {
        equals: normalized,
        mode: "insensitive",
      },
    },
  });

  if (existing) return { status: "error", type: "CATEGORY_DUPLICATE" };

  await db.category.create({
    data: { name: categoryName, userId: userId },
  });

  return { status: "success", type: "CATEGORY_CREATED" };
}
