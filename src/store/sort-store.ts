import { create } from "zustand";

interface SortStore {
  order: "default" | "asc" | "desc";
  setOrder: (order: "default" | "asc" | "desc") => void;
}

export const useSortStore = create<SortStore>((set) => ({
  order: "default",
  setOrder: (order) => set({ order }),
}));
