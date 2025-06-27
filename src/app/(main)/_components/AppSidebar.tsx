import {
  Separator,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui";

import List from "./note/List";
import Toggle from "./sidebar/Toggle";
import TopBar from "./sidebar/TopBar";
import Footer from "./sidebar/Footer";
import NewNoteBtn from "./sidebar/NewNoteBtn";

export function AppSidebar() {
  return (
    <>
      <Toggle />
      <Sidebar variant="floating">
        <TopBar />
        <SidebarHeader>
          <NewNoteBtn />
        </SidebarHeader>
        <Separator className="mt-2" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>My Notes</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <List />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <Separator className="mb-2" />
        <Footer />
      </Sidebar>
    </>
  );
}
