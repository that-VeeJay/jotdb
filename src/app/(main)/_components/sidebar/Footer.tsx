import { ChevronUp, User2 } from "lucide-react";

import { requireUser } from "@/utils/auth/requireUser";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";

export default async function Footer() {
  const { name, email } = await requireUser();

  return (
    <SidebarFooter>
      <SidebarMenu className="space-y-2">
        <SidebarMenuItem className="flex items-center justify-between px-3">
          <span>Theme</span>
          <ThemeToggle />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <div className="flex gap-2 items-center">
                  <User2 />
                  <div className="flex flex-col">
                    <span className="text-xs">
                      Signed in as:{" "}
                      <span className="text-sm font-semibold">{name}</span>
                    </span>
                    <span className="text-xs text-stone-400">{email}</span>
                  </div>
                </div>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <form action="/api/auth/signout" method="post">
                  <button className="button block" type="submit">
                    Sign out
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
