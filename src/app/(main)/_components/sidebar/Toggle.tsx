"use client";

import { SidebarTrigger } from "@/components/ui";
import { useSidebar } from "@/components/ui";

export default function Toggle() {
  const { state, isMobile } = useSidebar();
  const shouldShowTrigger = isMobile || state !== "expanded";

  return (
    <> {shouldShowTrigger && <SidebarTrigger className="p-5 absolute" />}</>
  );
}
