import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  CodeXml,
  Italic,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from "lucide-react";

import { Editor } from "@tiptap/react";
import { Toggle } from "@/components/ui";
import { ScrollArea, ScrollBar, VerticalSeparator } from "@/components/ui";

import { HeadingDropdown } from "./toggles/HeadingDropdown";
import { HighlightDropdown } from "./toggles/HighlighDropdown";
import { TextAlignDropdown } from "./toggles/TextAlignDropdown";

const ICON_SIZE = 18;

export default function Menubar({ editor }: { editor: Editor }) {
  if (!editor) return null;

  return (
    <ScrollArea className="max-w-full">
      <div className="flex items-center">
        <HeadingDropdown editor={editor} />
        <VerticalSeparator />
        <div className="flex items-center gap-1">
          <Toggle
            pressed={editor.isActive("bold")}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className="size-4" />
          </Toggle>

          <Toggle
            pressed={editor.isActive("italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive("strike")}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive("underline")}
            onPressedChange={() =>
              editor.chain().focus().toggleUnderline().run()
            }
          >
            <Underline size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive("code")}
            onPressedChange={() => editor.chain().focus().toggleCode().run()}
          >
            <Code size={ICON_SIZE} />
          </Toggle>
        </div>
        <VerticalSeparator />
        <div className="flex items-center gap-1">
          <Toggle
            pressed={editor.isActive("bulletList")}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            <List size={ICON_SIZE} />
          </Toggle>
          <Toggle
            pressed={editor.isActive("orderedList")}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
          >
            <ListOrdered size={ICON_SIZE} />
          </Toggle>
        </div>
        <VerticalSeparator />
        <TextAlignDropdown editor={editor} />
        <VerticalSeparator />
        <div className="flex items-center gap-1">
          <HighlightDropdown editor={editor} />
          <Toggle
            pressed={editor.isActive("blockquote")}
            onPressedChange={() =>
              editor.chain().focus().toggleBlockquote().run()
            }
          >
            <Quote size={ICON_SIZE} />
          </Toggle>
          <Toggle
            pressed={editor.isActive("codeBlock")}
            onPressedChange={() =>
              editor.chain().focus().toggleCodeBlock().run()
            }
          >
            <CodeXml size={ICON_SIZE} />
          </Toggle>
        </div>
      </div>
      <ScrollBar orientation="horizontal" className="h-2" />
    </ScrollArea>
  );
}
