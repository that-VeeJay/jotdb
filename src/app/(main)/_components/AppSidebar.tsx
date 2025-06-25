"use client";

import {
  useSidebar,
  Separator,
  Sidebar,
  SidebarTrigger,
} from "@/components/ui";

import Header from "./sidebar/Header";
import TopBar from "./sidebar/TopBar";
import Footer from "./sidebar/Footer";
import Content from "./sidebar/Content";

export function AppSidebar() {
  const { state, isMobile } = useSidebar();
  const shouldShowTrigger = isMobile || state !== "expanded";

  return (
    <>
      {shouldShowTrigger && <SidebarTrigger className="p-5 absolute" />}
      <Sidebar variant="floating">
        <TopBar />
        <Header />
        <Separator className="mt-2" />
        <Content />
        <Separator className="mb-2" />
        <Footer />
      </Sidebar>
    </>
  );
}
