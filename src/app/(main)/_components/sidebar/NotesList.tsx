"use client";

import { useEffect } from "react";

import type { DragEndEvent } from "@dnd-kit/core";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import { useCategoriesStore, useNotesStore, useSortStore } from "@/store";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

  /**
   * Returns the index of a note in the notes array based on its ID.
   *
   * @param id - The unique ID of the note
   * @returns The index of the note in the notes array, or -1 if not found
   */
  const getNotePosition = (id: string) => {
    return notes.findIndex((note) => note.id === id);
  };

  /**
   * Handles the end of a drag event.
   * Reorders the notes array based on the new positions of the dragged items.
   *
   * @param event - The drag end event provided by @dnd-kit/core
   */
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const reordered = arrayMove(
      notes,
      getNotePosition(String(active.id)),
      getNotePosition(String(over.id))
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
        {sortedNotes.length === 0 ? (
          <span className="text-center mt-5 text-muted-foreground">
            No notes in this category.
          </span>
        ) : (
          sortedNotes.map((note) => (
            <Note key={note.id} id={note.id} title={note.title} />
          ))
        )}
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
