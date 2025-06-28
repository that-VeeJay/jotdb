"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";

import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
} from "lucide-react";
import { Editor } from "@tiptap/react";

const ICON_SIZE = 18;

const alignments = [
  { icon: AlignLeft, label: "Left", value: "left" },
  { icon: AlignCenter, label: "Center", value: "center" },
  { icon: AlignRight, label: "Right", value: "right" },
  { icon: AlignJustify, label: "Justify", value: "justify" },
];

export function TextAlignDropdown({ editor }: { editor: Editor }) {
  if (!editor) return null;

  const currentAlign = alignments.find(({ value }) =>
    editor.isActive("paragraph", { textAlign: value })
  );

  const CurrentIcon = currentAlign ? currentAlign.icon : AlignLeft;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          aria-label="Toggle text alignment"
          pressed={!!currentAlign}
          className="flex items-center gap-1"
        >
          <CurrentIcon size={ICON_SIZE} />
          <ChevronDown size={ICON_SIZE - 2} className="ml-1" />
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
              <Icon size={ICON_SIZE} className="mr-2" />
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
