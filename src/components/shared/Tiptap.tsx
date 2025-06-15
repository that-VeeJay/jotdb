"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({ placeholder: "Write something..." }),
      StarterKit,
    ],
    // content: "Hello World",
    editorProps: {
      attributes: {
        class:
          "scrollbar-hidden h-160 resize-none border rounded-md bg-neutral-100 dark:bg-neutral-900 p-3 overflow-y-auto",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;

