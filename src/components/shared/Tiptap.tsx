"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import TextAlign from "@tiptap/extension-text-align";

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    // content: "Hello World",
    editorProps: {
      attributes: {
        class: "min-h-[calc(100vh-8rem)] border rounded-md py-2 px-3",
      },
    },
  });

  return (
    <div className="">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
