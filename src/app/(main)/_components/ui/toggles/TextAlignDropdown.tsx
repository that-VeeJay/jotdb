import {
  Toggle,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
  icons,
} from "lucide-react";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  iconSize: number;
  editor: Editor;
  toggleSize: ToggleSizeType;
}

const alignments = [
  { icon: AlignLeft, label: "Left", value: "left" },
  { icon: AlignCenter, label: "Center", value: "center" },
  { icon: AlignRight, label: "Right", value: "right" },
  { icon: AlignJustify, label: "Justify", value: "justify" },
];

export default function TextAlignDropdown({
  editor,
  iconSize,
  toggleSize,
}: PropsType) {
  if (!editor) return null;

  const currentAlign = alignments.find(({ value }) =>
    editor.isActive("paragraph", { textAlign: value })
  );

  const CurrentIcon = currentAlign ? currentAlign.icon : AlignLeft;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          size={toggleSize}
          aria-label="Toggle text alignment"
          pressed={!!currentAlign}
          className="flex items-center gap-1"
        >
          <CurrentIcon size={iconSize} />
          <ChevronDown />
        </Toggle>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-36">
        {alignments.map(({ icon: Icon, label, value }) => {
          const isActive = editor.isActive("paragraph", { textAlign: value });
          return (
            <DropdownMenuItem
              key={value}
              onClick={() => editor.chain().focus().setTextAlign(value).run()}
              className={isActive ? "bg-muted" : ""}
            >
              <Icon size={iconSize} className="mr-2" />
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
