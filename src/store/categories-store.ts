import { create } from "zustand";
import type { Category } from "@/lib/types";

interface CategoriesStore {
  categories: Category[];
  fetchCategories: (userId: string) => Promise<void>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fetchCategories: async (userId: string) => {
    const response = await fetch(`/api/categories?userId=${userId}`);
    const data: Category[] = await response.json();
    set({ categories: data });
  },
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
