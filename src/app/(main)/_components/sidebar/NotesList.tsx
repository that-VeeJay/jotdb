"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { useDragNotes } from "@/hooks/useDragNote";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Note from "./Note";

export default function NotesList() {
  const hydrated = useHydrated();
  const sensors = useDnDSensors();
  const { notes, handleDragEnd } = useDragNotes();

  if (!hydrated) return null;

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <SidebarGroupContent className="column overflow-hidden h-full">
        <SortableContext items={notes} strategy={verticalListSortingStrategy}>
          <SidebarMenu>
            {notes.map((note) => (
              <Note id={note.id} title={note.title} key={note.id} />
            ))}
          </SidebarMenu>
        </SortableContext>
      </SidebarGroupContent>
    </DndContext>
  );
}
