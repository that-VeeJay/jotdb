import { create } from "zustand";
import type { Category } from "@/lib/types";
import { fetchUserCategories } from "@/lib/api/categories";
interface CategoriesStore {
  categories: Category[];
  fetchCategories: (userId: string) => Promise<void>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fetchCategories: async (userId) => {
    const data = await fetchUserCategories(userId);
    set({ categories: data });
  },
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
