import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { PaintBucket, Check, ChevronDown } from "lucide-react";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  iconSize: number;
  editor: Editor;
  toggleSize: ToggleSizeType;
}

const highlightColors = [
  { label: "Yellow", color: "#facc15" },
  { label: "Red", color: "#f87171" },
  { label: "Green", color: "#4ade80" },
  { label: "Blue", color: "#60a5fa" },
  { label: "Purple", color: "#c084fc" },
];

export default function HighlightDropdown({
  editor,
  iconSize,
  toggleSize,
}: PropsType) {
  if (!editor) return null;

  const activeColor = highlightColors.find((color) =>
    editor.isActive("highlight", { color: color.color })
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          size={toggleSize}
          pressed={!!activeColor}
          aria-label="Highlight"
          className={!!activeColor ? "bg-stone-800" : ""}
        >
          <PaintBucket size={iconSize} />
          <ChevronDown />
        </Toggle>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        {highlightColors.map((color) => {
          const isActive = editor.isActive("highlight", { color: color.color });

          return (
            <DropdownMenuItem
              key={color.label}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .toggleHighlight({ color: color.color })
                  .run()
              }
              className={isActive ? "bg-muted" : ""}
            >
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color.color }}
              />
              <span className="flex-1">{color.label}</span>
              {isActive && <Check className="w-4 h-4 text-muted-foreground" />}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuItem
          onClick={() => editor.chain().focus().unsetHighlight().run()}
        >
          <div className="w-4 h-4 rounded-full border-2 mr-2" /> Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
