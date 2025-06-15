"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({ placeholder: "Write something..." }),
      StarterKit,
    ],
    // content: "Hello World",
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md py-2 px-3",
      },
    },
  });

  return [
    <div className="flex flex-col">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>,
  ];
}
