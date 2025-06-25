"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import type { Note } from "@/lib/types";

interface NoteContextType {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }
  return context;
}
