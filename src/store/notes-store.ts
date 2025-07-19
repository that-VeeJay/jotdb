import { create } from "zustand";
import type { NoteType } from "@/lib/types";

interface NoteStore {
  notes: NoteType[];
  setNotes: (notes: NoteType[]) => void;
  fetchNotes: () => Promise<void>;
}

export const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  fetchNotes: async () => {
    const response = await fetch("/api/notes");
    const data: NoteType[] = await response.json();
    set({ notes: data });
  },
}));
