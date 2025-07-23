import { z } from "zod";

export const addCategorySchema = z.object({
  category: z
    .string()
    .min(1, "Category name is required.")
    .max(50, "Category name is too long."),
});
