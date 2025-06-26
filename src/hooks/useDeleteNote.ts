import { useState } from "react";
import { toast } from "sonner";
import { useNoteContext } from "@/context/NoteContext";
import { deleteNote } from "@/lib/supabase/notes";

export function useDeleteNote(noteId: string) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { setNotes, notes, setActiveNote } = useNoteContext();

  const deleteHandler = async (onClose: () => void) => {
    setIsDeleting(true);
    const { error } = await deleteNote(noteId);

    if (error) {
      toast.error("Failed to delete the note. Please try again.");
    } else {
      toast("🗑️ Note deleted successfully.");
      setActiveNote(null);
      setNotes(notes.filter((n) => n.id !== noteId));
      onClose();
    }

    setIsDeleting(false);
  };

  return { isDeleting, deleteHandler };
}
