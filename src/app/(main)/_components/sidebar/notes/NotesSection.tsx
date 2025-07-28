import { getNotesPreview } from "@/lib/data-access/note";
import { requireUser } from "@/lib/data-access/user";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui";

import List from "./List";

export default async function NotesSection() {
  const userId = await requireUser();
  const notesPreview = await getNotesPreview(userId);

  return (
    <SidebarGroup>
      <div className="flex items-center justify-between">
        <SidebarGroupLabel>Notes</SidebarGroupLabel>
        <div className="flex items-center gap-1">{/* <SortControls /> */}</div>
      </div>
      <List notesPreview={notesPreview} />
    </SidebarGroup>
  );
}
