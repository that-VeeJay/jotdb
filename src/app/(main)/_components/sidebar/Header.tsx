import { Plus } from "lucide-react";
import { Button, SidebarHeader } from "@/components/ui";

export default function Header() {
  return (
    <SidebarHeader>
      <Button variant="outline">
        New note
        <Plus />
      </Button>
    </SidebarHeader>
  );
}
