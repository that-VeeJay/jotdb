import { useState } from "react";
import { toast } from "sonner";
import { type Note } from "@/lib/types";
import { saveNote } from "@/lib/supabase/notes";
import { useNoteContext } from "@/context/NoteContext";

export function useSaveNote(note: Note, title: string, content: string) {
  const { setIsEditing, setNotes, setActiveNote } = useNoteContext();
  const [isSaving, setIsSaving] = useState(false);

  const saveNoteHandler = async () => {
    setIsSaving(true);

    try {
      const { data, error } = await saveNote(title, content, note.id);

      if (error || !data) {
        toast.error("Failed to save note.");
        setIsSaving(false);
        return;
      }

      setNotes((prev) => prev.map((n) => (n.id === note.id ? data : n)));
      setActiveNote(data);
      setIsEditing(false);
    } finally {
      setIsSaving(false);
    }
  };

  return { isSaving, saveNoteHandler };
}
