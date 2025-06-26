"use client";

import { Plus } from "lucide-react";
import { type Note } from "@/lib/types";
import { Button } from "@/components/ui";
import { useNoteContext } from "@/context/NoteContext";
import { useUserContext } from "@/context/UserContext";
import { createNote } from "@/lib/supabase/notes";

export default function NewNoteBtn() {
  const { notes, setNotes, setIsEditing, setActiveNote } = useNoteContext();

  const { user } = useUserContext();

  const createNewNote = async () => {
    if (!user?.id) return;

    const { data, error } = await createNote(user.id);

    setNotes([data as Note, ...notes]);
    setActiveNote(data as Note);
    setIsEditing(true);
  };

  return (
    <Button onClick={createNewNote} variant="outline">
      New note
      <Plus />
    </Button>
  );
}
