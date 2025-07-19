import { create } from "zustand";
import type { CategoriesType } from "@/lib/types";

interface CategoriesStore {
  categories: CategoriesType[];
  fetchCategories: () => Promise<void>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fetchCategories: async () => {
    const response = await fetch("/api/categories");
    const data: CategoriesType[] = await response.json();
    set({ categories: data });
  },
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
