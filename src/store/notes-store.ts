import { create } from "zustand";
import type { NotePreview } from "@/lib/types";

interface NoteStore {
  notes: NotePreview[];
  setNotes: (notes: NotePreview[]) => void;
  fetchNotes: (categoryId: string) => Promise<void>;
}

export const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  fetchNotes: async (categoryId: string) => {
    const response = await fetch(`/api/notes?categoryId=${categoryId}`);
    const data = await response.json();
    set({ notes: data });
  },
}));
