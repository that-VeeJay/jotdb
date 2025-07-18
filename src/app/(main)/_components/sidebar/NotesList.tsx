"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui";
import { sidebarItems } from "@/lib/data/SidebarItems";
import { Ellipsis } from "lucide-react";
import { useState } from "react";

import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function NotesList() {
  const [notes, setNotes] = useState(sidebarItems);

  const getNotePosition = (id: number) =>
    notes.findIndex((note) => note.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setNotes((notes) => {
      const originalPosition = getNotePosition(active.id);
      const newPosition = getNotePosition(over.id);

      return arrayMove(notes, originalPosition, newPosition);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

function Note({ id, title }: { id: any; title: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <SidebarMenuItem
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-pointer touch-none"
    >
      <SidebarMenuButton asChild>
        <div>
          <span className="line-clamp-1">{title}</span>
          <DropdownMenu>
            <Trigger />
            <Content />
          </DropdownMenu>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function Trigger() {
  return (
    <DropdownMenuTrigger className="ml-auto cursor-pointer">
      <Ellipsis className="w-5 h-5 opacity-50" />
    </DropdownMenuTrigger>
  );
}

function Content() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
