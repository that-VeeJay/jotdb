"use client";

import Snackbar from "@/components/shared/Snackbar";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui";
import Item from "../note/Item";
import { useNoteContext } from "@/context/NoteContext";

export default function Content() {
  const { notes } = useNoteContext();

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>My Notes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {notes.length === 0 ? (
              <Snackbar message="No notes yet." type="info" />
            ) : (
              <>
                <Item />
              </>
            )}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
