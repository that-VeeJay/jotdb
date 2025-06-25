import { SidebarTrigger } from "@/components/ui";
import { ProjectInfo } from "../ProjectInfo";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between ">
      <div className="pl-3 flex items-center gap-3">
        <span>JOTDB</span> <ProjectInfo />
      </div>
      <SidebarTrigger className="p-5" />
    </div>
  );
}
