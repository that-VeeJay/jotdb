import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui";
import { sidebarItems } from "@/lib/data/SidebarItems";
import { Ellipsis } from "lucide-react";

export default function NotesList() {
  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {sidebarItems.map((item) => (
          <SidebarMenuItem key={item.title} className="cursor-pointer">
            <SidebarMenuButton asChild>
              <div>
                <item.icon />
                <span className="line-clamp-1">{item.title}</span>
                <DropdownMenu>
                  <Trigger />
                  <Content />
                </DropdownMenu>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
}

function Trigger() {
  return (
    <DropdownMenuTrigger className="ml-auto cursor-pointer">
      <Ellipsis className="w-5 h-5 opacity-50" />
    </DropdownMenuTrigger>
  );
}

function Content() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
