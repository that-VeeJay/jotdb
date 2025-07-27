import { auth } from "@/lib/auth";
import { UserSession } from "@/lib/types";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarTrigger,
} from "@/components/ui";
import Header from "./Header";
import Footer from "./Footer";

import NotesSection from "./notes/NotesSection";
import CategoriesSection from "./category/CategoriesSection";

export async function AppSidebar() {
  const session = await auth();
  const user = session?.user as UserSession;

  return (
    <>
      <Sidebar variant="floating">
        <Header user={user} />
        <SidebarGroup>{user.id && <CategoriesSection />}</SidebarGroup>
        <SidebarContent>
          <NotesSection />
        </SidebarContent>
        <Footer />
      </Sidebar>
      <SidebarTrigger />
    </>
  );
}
