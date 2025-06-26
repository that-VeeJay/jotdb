"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { useFetchNotes } from "@/hooks/useFetchNotes";
import { type Note, type NoteContextType } from "@/lib/types";

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useFetchNotes(setNotes);

  const value = {
    notes,
    setNotes,
    isEditing,
    setIsEditing,
    activeNote,
    setActiveNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }
  return context;
}
