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
import { Categories } from "./Categories";

export async function AppSidebar() {
  const session = await auth();
  const user = session?.user as UserSession;

  return (
    <>
      <Sidebar variant="floating">
        <Header user={user} />
        <SidebarGroup>
          <Categories />
        </SidebarGroup>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Notes</SidebarGroupLabel>
            <NotesList />
          </SidebarGroup>
        </SidebarContent>
        <Footer />
      </Sidebar>
      <SidebarTrigger />
    </>
  );
}
