import { SidebarFooter } from "@/components/ui";
import { Circle, CircleQuestionMark } from "lucide-react";

export default function Footer() {
  return (
    <SidebarFooter>
      <div className="flex">
        <Circle size={18} className="text-muted-foreground" />
        <CircleQuestionMark
          size={18}
          className="text-muted-foreground ml-auto"
        />
      </div>
    </SidebarFooter>
  );
}
