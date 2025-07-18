import { auth } from "@/lib/auth";
import { UserSession } from "@/lib/types";
import { Home } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import {
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
];

export async function AppSidebar() {
  const session = await auth();
  const user = session?.user as UserSession;

  return (
    <>
      <Sidebar variant="floating">
        <Header user={user} />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Notes</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <Footer />
      </Sidebar>
      <SidebarTrigger />
    </>
  );
}
