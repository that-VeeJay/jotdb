import {
  SidebarMenuItem,
  SidebarMenuButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Ellipsis } from "lucide-react";

export default function Note({ id, title }: { id: number; title: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <SidebarMenuItem
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-pointer touch-none"
    >
      <SidebarMenuButton asChild>
        <div>
          <span className="line-clamp-1">{title}</span>
          <DropdownMenu>
            <Trigger />
            <Content />
          </DropdownMenu>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
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
