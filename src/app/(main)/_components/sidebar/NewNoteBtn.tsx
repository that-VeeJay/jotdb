"use client";

import { Plus } from "lucide-react";
import { type Note } from "@/lib/types";
import { Button } from "@/components/ui";
import { useNoteContext } from "@/context/NoteContext";
import { createClient } from "@/utils/supabase/client";
import { useUserContext } from "@/context/UserContext";

export default function NewNoteBtn() {
  const { notes, setNotes, setIsEditing, setActiveNote } = useNoteContext();

  const { user } = useUserContext();
  const supabase = createClient();

  const createNewNote = async () => {
    if (!user?.id) return;

    const { data, error } = await supabase
      .from("notes")
      .insert({ user_id: user.id, title: "New note", content: "" })
      .select()
      .single();

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
