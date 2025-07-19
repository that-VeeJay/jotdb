"use client";

import { useState } from "react";
import { useDnDSensors } from "@/hooks/useDndSensors";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { SidebarGroupContent, SidebarMenu } from "@/components/ui";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Note from "./Note";
import { NotesList as List } from "@/lib/data/NotesList";

export default function NotesList() {
  const sensors = useDnDSensors();
  const [notes, setNotes] = useState(List);

  const getNotePosition = (id: number) =>
    notes.findIndex((note) => note.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setNotes((prev) => {
      const from = getNotePosition(active.id);
      const to = getNotePosition(over.id);
      console.log(arrayMove(prev, from, to));
      return arrayMove(prev, from, to);
    });
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
            {notes.map((note) => (
              <Note id={note.id} title={note.title} key={note.id} />
            ))}
          </SidebarMenu>
        </SortableContext>
      </SidebarGroupContent>
    </DndContext>
  );
}
