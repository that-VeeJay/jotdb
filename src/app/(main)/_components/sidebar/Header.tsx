import { ChevronDown, Pen } from "lucide-react";
import type { UserSession } from "@/lib/types";
import { formatString, getInitials } from "@/lib/utils";
import SignoutButton from "@/app/(auth)/_components/SignoutButton";
import {
  Button,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui";

export default function Header({ user }: { user: UserSession }) {
  return (
    <SidebarHeader>
      <div className="flex items-center gap-1">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <Trigger name={user.name} image={user.image} />
              <Content name={user.name} image={user.image} email={user.email} />
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Pen />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Create new note</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </SidebarHeader>
  );
}

function UserAvatar({
  image,
  name,
  size,
}: {
  image: string | null;
  name: string | null;
  size: number;
}) {
  return (
    <Avatar className={`w-[${size}px] h-[${size}px]`}>
      <AvatarImage src={image ?? undefined} alt={`${name}'s profile`} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

function Trigger({
  name,
  image,
}: {
  name: string | null;
  image: string | null;
}) {
  const displayName = formatString(name);

  return (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton className="py-5">
        <UserAvatar image={image} name={displayName} size={25} />
        {displayName}
        <ChevronDown className="ml-auto" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
}

function Content({
  image,
  name,
  email,
}: {
  name: string | null;
  image: string | null;
  email: string | null;
}) {
  const displayName = formatString(name);

  return (
    <DropdownMenuContent className="p-3 w-[20rem]" alignOffset={8}>
      <div className="flex items-center gap-3">
        <UserAvatar image={image} name={displayName} size={35} />
        <div>
          <span>{displayName}</span>
          <span className="block text-xs text-muted-foreground">{email}</span>
        </div>
      </div>
      <Separator className="my-5" />
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="flex-1" disabled={true}>
          Profile
        </Button>
        <SignoutButton />
      </div>
    </DropdownMenuContent>
  );
}
