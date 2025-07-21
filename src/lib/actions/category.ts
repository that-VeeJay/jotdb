"use server";

import { db } from "../prisma";

export async function createCategory(categoryName: string, userId: string) {
  if (!categoryName || !userId) return;

  const existing = await db.category.findFirst({
    where: { name: categoryName, userId: userId },
  });

  if (existing) {
    throw new Error("Category already exists");
  }

  const category = await db.category.create({
    data: { name: categoryName, userId: userId },
  });

  return category;
}
