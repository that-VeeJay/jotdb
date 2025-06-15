import { Toggle } from "@radix-ui/react-toggle";
import type { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  //   Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

const TOGGLE_BUTTON_SIZE = "size-5";

export default function Menubar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  const Options = [
    {
      icon: <Heading1 className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered className={TOGGLE_BUTTON_SIZE} />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
    // {
    //   icon: <Highlighter className={TOGGLE_BUTTON_SIZE} />,
    //   onClick: () => editor.chain().focus().toggleHighlight().run(),
    //   pressed: editor.isActive("highlight"),
    // },
  ];

  return (
    <div className="border rounded-md p-3 mb-1  space-x-2 z-50">
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.pressed}
          onPressedChange={option.onClick}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
}
