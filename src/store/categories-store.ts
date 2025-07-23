import { create } from "zustand";
import type { Category } from "@/lib/types";
import { fetchUserCategories } from "@/lib/api/categories";

interface CategoriesState {
  categories: Category[];
  activeCategory: Category | null;
}

interface CategoriesActions {
  fetchCategories: (userId: string) => Promise<void>;
  setActiveCategory: (category: Category) => void;
}

export const useCategoriesStore = create<CategoriesState & CategoriesActions>(
  (set) => ({
    categories: [],
    activeCategory: null,

    fetchCategories: async (userId) => {
      const data = await fetchUserCategories(userId);
      set({ categories: data });
    },

    setActiveCategory: (category) => set({ activeCategory: category }),
  })
);
