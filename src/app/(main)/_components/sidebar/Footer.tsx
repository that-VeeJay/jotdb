import {
  Button,
  Separator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SidebarFooter,
} from "@/components/ui";
import {
  Settings,
  CircleQuestionMark,
  Keyboard,
  Book,
  SquarePen,
} from "lucide-react";
import { ThemeTogglev2 } from "@/components/shared/ThemeTogglev2";

export default function Footer() {
  return (
    <SidebarFooter>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <Settings size={18} className="text-muted-foreground" />
          </Button>

          <ThemeTogglev2 />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <CircleQuestionMark size={18} className="text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit flex flex-col p-1">
            <Button variant="ghost" size="sm" className="justify-start">
              <Book />
              About
            </Button>

            <Separator className="my-2" />
            <span className="text-xs text-muted-foreground ml-3">
              What's new?
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              disabled={true}
            >
              <SquarePen />
              Changelog
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </SidebarFooter>
  );
}
