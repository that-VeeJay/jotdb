import { auth } from "@/lib/auth";
import { UserSession } from "@/lib/types";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui";
import Header from "./Header";
import Footer from "./Footer";
import NotesList from "./NotesList";
import { Selector } from "./category/Selector";
import SortControls from "./SortControls";

export async function AppSidebar() {
  const session = await auth();
  const user = session?.user as UserSession;

  return (
    <>
      <Sidebar variant="floating">
        <Header user={user} />
        <SidebarGroup>{user.id && <Selector userId={user.id} />}</SidebarGroup>
        <SidebarContent>
          <SidebarGroup>
            <div className="flex items-center justify-between">
              <SidebarGroupLabel>Notes</SidebarGroupLabel>
              <div className="flex items-center gap-1">
                <SortControls />
              </div>
            </div>
            <NotesList />
          </SidebarGroup>
        </SidebarContent>
        <Footer />
      </Sidebar>
      <SidebarTrigger />
    </>
  );
}
