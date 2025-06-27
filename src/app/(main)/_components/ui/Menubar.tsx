import { Toggle } from "@/components/ui";
import { Editor } from "@tiptap/react";
import { ScrollArea, ScrollBar, VerticalSeparator } from "@/components/ui";
import { HighlightDropdown } from "./toggles/HighlighDropdown";
import { HeadingDropdown } from "./toggles/HeadingDropdown";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  CodeXml,
  Quote,
  AlignJustify,
  Italic,
  Underline,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

const ICON_SIZE = 18;

export default function Menubar({ editor }: { editor: Editor }) {
  if (!editor) return null;

  return (
    <ScrollArea className="w-full rounded-md border whitespace-nowrap p-1">
      <div className="flex items-center">
        <HeadingDropdown editor={editor} />
        <VerticalSeparator />
        <div className="space-x-1">
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
        <div className="space-x-1">
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
        <div className="space-x-1">
          <Toggle
            pressed={editor.isActive({ textAlign: "left" })}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("left").run()
            }
          >
            <AlignLeft size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive({ textAlign: "center" })}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("center").run()
            }
          >
            <AlignCenter size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive({ textAlign: "right" })}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("right").run()
            }
          >
            <AlignRight size={ICON_SIZE} />
          </Toggle>

          <Toggle
            pressed={editor.isActive({ textAlign: "justify" })}
            onPressedChange={() =>
              editor.chain().focus().setTextAlign("justify").run()
            }
          >
            <AlignJustify size={ICON_SIZE} />
          </Toggle>
        </div>
        <VerticalSeparator />
        <div className="space-x-1">
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
