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

export async function deleteCategory(categoryName: string, userId: string) {
  if (!categoryName) return;

  try {
    const unsorted = await db.category.findFirst({
      where: {
        name: "Unsorted",
        userId: userId,
      },
    });

    // Reassign notes to 'Unsorted' for this user
    await db.note.updateMany({
      where: {
        category: { name: categoryName, userId: userId },
      },
      data: {
        categoryId: unsorted?.id,
      },
    });

    // Delete the target category
    await db.category.deleteMany({
      where: {
        name: categoryName,
        userId: userId,
      },
    });

    return { status: "success", type: "CATEGORY_DELETED" };
  } catch (error) {
    console.error("Failed to delete category:", error);
    return { status: "error", type: "INTERNAL_ERROR" };
  }
}
