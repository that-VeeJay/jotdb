"use client";

import { useEffect } from "react";

import { useNotesStore } from "@/store";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Note from "./Note";

export default function NotesList() {
  const sensors = useDnDSensors();
  const notes = useNotesStore((state) => state.notes);
  const setNotes = useNotesStore((state) => state.setNotes);
  const fetchNotes = useNotesStore((state) => state.fetchNotes);

  useEffect(() => {
    fetchNotes();
  }, []);

  const getNotePosition = (id: string) =>
    notes.findIndex((note) => note.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const reordered = arrayMove(
      notes,
      getNotePosition(active.id),
      getNotePosition(over.id)
    );
    setNotes(reordered);
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <SidebarGroupContent className="column overflow-hidden h-full">
        <SortableContext items={notes} strategy={verticalListSortingStrategy}>
          <SidebarMenu>
            {notes.length === 0
              ? "No notes in this category"
              : notes.map((note) => (
                  <Note key={note.id} id={note.id} title={note.title} />
                ))}
          </SidebarMenu>
        </SortableContext>
      </SidebarGroupContent>
    </DndContext>
  );
}
