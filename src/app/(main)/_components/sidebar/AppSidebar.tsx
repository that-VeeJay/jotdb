import { Home } from "lucide-react";

import { auth } from "@/auth";
import type { UserSession } from "@/lib/types";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";

import Tags from "./Tags";
import Header from "./Header";
import Footer from "./Footer";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
];

export async function AppSidebar() {
  const session = await auth();
  const user = session!.user as UserSession;

  return (
    <Sidebar variant="floating">
      <Header user={user} />
      <Tags />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
  );
}
