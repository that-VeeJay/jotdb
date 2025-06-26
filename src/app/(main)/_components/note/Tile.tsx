import { MoreHorizontal, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";
import { useNoteContext } from "@/context/NoteContext";
import { type Note } from "@/lib/types";
import { deleteNote } from "@/lib/supabase/notes";

export default function Tile({ note }: { note: Note }) {
  const { setActiveNote, setIsEditing, setNotes, notes, activeNote } =
    useNoteContext();
  const isActive = activeNote?.id === note.id;

  const selectNote = () => {
    setActiveNote(note);
    setIsEditing(false);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirm) return;

    const { error } = await deleteNote(note.id);

    if (error) {
      console.error(error);
      return;
    }
    setActiveNote(null);
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  return (
    <SidebarMenuItem onClick={selectNote}>
      <SidebarMenuButton className={isActive ? "bg-stone-800" : ""}>
        <span>{note.title || "New note"}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DropdownMenuItem onClick={handleDelete}>
            <Trash />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}
