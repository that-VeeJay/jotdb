import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/react";
import {
  Type,
  RemoveFormatting,
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";

const headings = [
  { level: 1, label: "Heading 1", icon: <Heading1 className="size-4" /> },
  { level: 2, label: "Heading 2", icon: <Heading2 className="size-4" /> },
  { level: 3, label: "Heading 3", icon: <Heading3 className="size-4" /> },
];

export function HeadingDropdown({ editor }: { editor: Editor }) {
  if (!editor) return null;

  const isHeading = headings.some(({ level }) =>
    editor.isActive("heading", { level })
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          pressed={editor.isActive("paragraph") || isHeading}
          aria-label="Text Format"
          className="gap-1"
        >
          <Type className="size-4" />
          <ChevronDown className="size-4" />
        </Toggle>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-44">
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph") ? "bg-accent font-semibold" : ""
          }
        >
          <RemoveFormatting className="mr-2 size-4" />
          Normal text
        </DropdownMenuItem>

        {headings.map((heading) => (
          <DropdownMenuItem
            key={heading.level}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: heading.level })
                .run()
            }
            className={
              editor.isActive("heading", { level: heading.level })
                ? "bg-accent font-semibold"
                : ""
            }
          >
            <span className="mr-2">{heading.icon}</span>
            {heading.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
