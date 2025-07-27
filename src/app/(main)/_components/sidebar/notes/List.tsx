"use client";

import { useState } from "react";
import { DndContext, DragEndEvent, closestCorners } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import Note from "./Note";
import type { NotePreview } from "@/lib/types";
import { useCategoriesStore } from "@/store";

export default function List({
  notesPreview,
}: {
  notesPreview: NotePreview[];
}) {
  const activeCategory = useCategoriesStore((state) => state.activeCategory);
  const [notes, setNotes] = useState(notesPreview);
  const sensors = useDnDSensors();

  if (!activeCategory) return null;

  const findNoteIndex = (id: string) =>
    notes.findIndex((note) => note.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const originalPosition = findNoteIndex(active.id as string);
    const newPosition = findNoteIndex(over.id as string);

    setNotes((prevNotes) =>
      arrayMove(prevNotes, originalPosition, newPosition)
    );
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <SortableContext items={notes} strategy={verticalListSortingStrategy}>
        <SidebarGroupContent>
          <SidebarMenu>
            {notes
              .filter((note) => note.categoryId === activeCategory?.id)
              .map((note) => (
                <Note key={note.id} id={note.id} title={note.title} />
              ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SortableContext>
    </DndContext>
  );
}
