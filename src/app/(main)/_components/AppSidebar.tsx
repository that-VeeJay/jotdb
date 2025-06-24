"use client";

import {
  useSidebar,
  Separator,
  Sidebar,
  SidebarTrigger,
} from "@/components/ui";

import Header from "./sidebar/Header";
import Footer from "./sidebar/Footer";
import Content from "./sidebar/Content";

import { ProjectInfo } from "./ProjectInfo";

export function AppSidebar() {
  const { state, isMobile } = useSidebar();
  const isCollapsed = state !== "expanded";
  const shouldShowTrigger = isMobile || isCollapsed;

  return (
    <>
      {shouldShowTrigger && <SidebarTrigger className="p-5 absolute" />}

      <Sidebar variant="floating">
        <div className="flex items-center justify-between ">
          <div className="pl-3 flex items-center gap-3">
            <span>JOTDB</span> <ProjectInfo />
          </div>
          <SidebarTrigger className="p-5" />
        </div>

        <Header />
        <Content />
        <Separator className="mb-3" />
        <Footer />
      </Sidebar>
    </>
  );
}
