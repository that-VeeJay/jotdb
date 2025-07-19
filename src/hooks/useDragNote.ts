import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { Notes } from "@/lib/data/Notes";

export function useDragNotes() {
  const [notes, setNotes] = useState(Notes);

  const getNotePosition = (id: number) =>
    notes.findIndex((note) => note.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setNotes((prev) => {
      const from = getNotePosition(active.id);
      const to = getNotePosition(over.id);
      return arrayMove(prev, from, to);
    });
  };

  return { notes, handleDragEnd };
}
