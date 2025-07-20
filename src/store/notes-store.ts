import { create } from "zustand";
import type { NotePreview } from "@/lib/types";
import { fetchUserNotePreviews } from "@/lib/api/notes";

interface NoteStore {
  notes: NotePreview[];
  setNotes: (notes: NotePreview[]) => void;
  fetchNotes: (categoryId: string) => Promise<void>;
}

export const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  fetchNotes: async (categoryId) => {
    const data = await fetchUserNotePreviews(categoryId);
    set({ notes: data });
  },
}));
