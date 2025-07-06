import { ChevronDown, Plus } from "lucide-react";

import { getFirstLetter } from "@/lib/utils";
import type { UserSession } from "@/lib/types";
import SignOut from "@/app/(auth)/_components/SignOut";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Separator,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";

export default function Header({ user }: { user: UserSession }) {
  const { name, image } = user;

  return (
    <SidebarHeader className="flex flex-row items-center">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={image} />
                  <AvatarFallback>{getFirstLetter(name)}</AvatarFallback>
                </Avatar>
                {name}
                <ChevronDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <UserDropdownContent user={user} />
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Plus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Create a new note</TooltipContent>
      </Tooltip>
    </SidebarHeader>
  );
}

function UserDropdownContent({ user }: { user: UserSession }) {
  const { name, email, image } = user;

  return (
    <DropdownMenuContent side="bottom" align="start" className="w-[20rem]">
      <div className="p-3 space-y-5">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={image} />
            <AvatarFallback>{getFirstLetter(name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>{name}</span>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
        </div>
        <Separator />
        <div className="flex gap-3 items-center">
          <Button variant="outline" size="sm" className="flex-1">
            Profile
          </Button>
          <SignOut />
        </div>
      </div>
    </DropdownMenuContent>
  );
}
