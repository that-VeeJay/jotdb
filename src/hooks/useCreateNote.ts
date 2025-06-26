import { useNoteContext } from "@/context/NoteContext";
import { useUserContext } from "@/context/UserContext";
import { useState } from "react";
import { createNote } from "@/lib/supabase/notes";
import { toast } from "sonner";
import { type Note } from "@/lib/types";

export function useCreateNote() {
  const [isCreating, setIsCreating] = useState(false);
  const { notes, setNotes, setIsEditing, setActiveNote } = useNoteContext();
  const { user } = useUserContext();

  const createNewNote = async () => {
    if (!user?.id) return;
    setIsCreating(true);

    try {
      const { data, error } = await createNote(user.id);

      if (error || !data) {
        toast.error("Failed to create new note. Please try again.");
        setIsCreating(false);
        return;
      }

      setNotes([data as Note, ...notes]);
      setActiveNote(data as Note);
      setIsEditing(true);
    } finally {
      setIsCreating(false);
    }
  };

  return { isCreating, createNewNote };
}
