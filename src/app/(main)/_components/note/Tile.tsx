"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";
import { useState } from "react";
import { MoreHorizontal, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Note } from "@/lib/types";
import { useNoteContext } from "@/context/NoteContext";
import DeleteNoteDialog from "../ui/DeleteNoteDialog";

export default function Tile({ note }: { note: Note }) {
  const { setActiveNote, setIsEditing, activeNote } = useNoteContext();
  const [open, setOpen] = useState(false);

  const isActive = activeNote?.id === note.id;

  const selectNote = () => {
    setActiveNote(note);
    setIsEditing(false);
  };

  const deleteConfirmation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <SidebarMenuItem onClick={selectNote}>
        <SidebarMenuButton
          className={cn(
            "hover:bg-stone-200 dark:hover:bg-stone-800",
            isActive && "dark:bg-stone-800 bg-stone-200"
          )}
        >
          <span>{note.title || "Untitled note"}</span>
        </SidebarMenuButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuAction>
              <MoreHorizontal />
            </SidebarMenuAction>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DropdownMenuItem
              onClick={deleteConfirmation}
              className="text-destructive hover:text-destructive focus:text-destructive"
            >
              <Trash className="text-destructive" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>

      <DeleteNoteDialog open={open} onOpenChange={setOpen} noteId={note.id} />
    </>
  );
}
