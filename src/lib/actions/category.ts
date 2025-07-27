"use server";

import z from "zod";
import { requireUser } from "../data-access/user";
import { createCategory } from "../data-access/category";
import { newCategorySchema } from "../schema";
import { revalidatePath } from "next/cache";

export async function createCategoryAction(
  _prevState: any,
  formData: FormData
) {
  try {
    const userId = await requireUser();

    const newCategory = formData.get("new-category") as string;

    const parsed = newCategorySchema.safeParse({
      category: newCategory.trim(),
    });

    if (parsed.error) {
      const { fieldErrors } = z.flattenError(parsed.error);
      const zodErrorMessage = fieldErrors.category?.[0];
      return { success: false, message: zodErrorMessage };
    }

    await createCategory(parsed.data.category, userId);
    revalidatePath("/");
    return {
      success: true,
      message: "Category has been created successfully.",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, message: message };
  }
}
