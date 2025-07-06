import { CircleQuestionMark } from "lucide-react";
import { ThemeTogglev2 } from "@/components/shared/ThemTogglev2";
import ProjectInformation from "./footer/ProjectInformation";
import {
  Button,
  SidebarFooter,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";

export default function Footer() {
  return (
    <SidebarFooter>
      <div className="flex items-center justify-between">
        <ThemeTogglev2 />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <CircleQuestionMark size={18} className="text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem disabled={true}>
                Keyboard Shortcuts
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true}>
                Terms and Privacy
              </DropdownMenuItem>
              <ProjectInformation />
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                What's new?
              </DropdownMenuLabel>
              <DropdownMenuItem disabled={true}>Changelog</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </SidebarFooter>
  );
}
