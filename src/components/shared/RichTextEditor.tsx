import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import Menubar from "./Menubar";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-4",
          },
        },
        code: {
          HTMLAttributes: {
            class:
              "bg-red-800 text-green-300 font-mono text-sm px-1 py-0.5 rounded",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "bg-yellow-200 text-black px-1 rounded-sm",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert w-full h-full p-4 outline-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
    },
  });

  return (
    <div>
      <Menubar editor={editor!} />
      <div className="w-full h-full overflow-auto bg-stone-900 rounded-md">
        <EditorContent editor={editor} className="w-full h-full" />
      </div>
    </div>
  );
}
