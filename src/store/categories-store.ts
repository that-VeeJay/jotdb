import { create } from "zustand";
import type { Category } from "@/lib/types";

interface CategoriesState {
  activeCategory: Category | null;
  setActiveCategory: (category: Category) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  activeCategory: null,
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
