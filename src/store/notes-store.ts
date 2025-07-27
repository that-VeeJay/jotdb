import { create } from "zustand";
import type { NotePreview } from "@/lib/types";

interface NoteStore {
  notes: NotePreview[];
  setNotes: (notes: NotePreview[]) => void;
}

export const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
}));
