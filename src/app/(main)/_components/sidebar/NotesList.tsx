"use client";

import { useEffect } from "react";

import { useNotesStore, useCategoriesStore, useSortStore } from "@/store";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import Note from "./Note";

export default function NotesList() {
  const order = useSortStore((state) => state.order);
  const sensors = useDnDSensors();

  const notes = useNotesStore((state) => state.notes);
  const setNotes = useNotesStore((state) => state.setNotes);
  const fetchNotes = useNotesStore((state) => state.fetchNotes);

  const activeCategory = useCategoriesStore((state) => state.activeCategory);

  useEffect(() => {
    if (activeCategory) fetchNotes(activeCategory);
  }, [activeCategory]);

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

  // Sort notes if order is "asc" or "desc"
  const sortedNotes = [...notes];
  if (order === "asc") {
    sortedNotes.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (order === "desc") {
    sortedNotes.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  const NoteListContent = (
    <SidebarGroupContent className="column overflow-hidden h-full">
      <SidebarMenu>
        {sortedNotes.length === 0
          ? "No notes in this category"
          : sortedNotes.map((note) => (
              <Note key={note.id} id={note.id} title={note.title} />
            ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );

  // Disable drag-and-drop when sorting order (asc/desc) is active
  if (["asc", "desc"].includes(order)) return NoteListContent;

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <SortableContext items={notes} strategy={verticalListSortingStrategy}>
        {NoteListContent}
      </SortableContext>
    </DndContext>
  );
}
