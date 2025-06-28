import {
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  RemoveFormatting,
  Type,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  editor: Editor;
  toggleSize: ToggleSizeType;
  iconSize: number;
}

const headings = [
  { level: 1, label: "Heading 1", icon: <Heading1 size={12} /> },
  { level: 2, label: "Heading 2", icon: <Heading2 size={12} /> },
  { level: 3, label: "Heading 3", icon: <Heading3 size={12} /> },
];

export default function HeadingDropdown({
  editor,
  toggleSize,
  iconSize,
}: PropsType) {
  if (!editor) return null;

  const isHeading = headings.some(({ level }) =>
    editor.isActive("heading", { level })
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          size={toggleSize}
          pressed={editor.isActive("paragraph") || isHeading}
          aria-label="Text Format"
          className="gap-1"
        >
          <Type size={iconSize} />
          <ChevronDown />
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
                .toggleHeading({ level: heading.level as 1 | 2 | 3 })
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
