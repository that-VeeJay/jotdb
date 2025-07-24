import { create } from "zustand";
import type { Category } from "@/lib/types";

interface CategoryActionsState {
  isEditing: boolean;
  isDeleting: boolean;
  selectedCategory: Category | null;
}

interface CategoryActions extends CategoryActionsState {
  actions: {
    setIsEditing: (value: boolean) => void;
    setIsDeleting: (value: boolean) => void;
    setSelectedCategory: (value: Category | null) => void;
  };
}

const useCategoryActionsStore = create<CategoryActions>((set) => ({
  isEditing: false,
  isDeleting: false,
  selectedCategory: null,

  actions: {
    setIsEditing: (value) => set({ isEditing: value }),
    setIsDeleting: (value) => set({ isDeleting: value }),
    setSelectedCategory: (value) => set({ selectedCategory: value }),
  },
}));

// Custom hooks for each piece of state
export const useSelectedCategory = () =>
  useCategoryActionsStore((state) => state.selectedCategory);

export const useIsEditing = () =>
  useCategoryActionsStore((state) => state.isEditing);

export const useIsDeleting = () =>
  useCategoryActionsStore((state) => state.isDeleting);

// Custom hook for all actions
export const useCategoryActions = () =>
  useCategoryActionsStore((state) => state.actions);
