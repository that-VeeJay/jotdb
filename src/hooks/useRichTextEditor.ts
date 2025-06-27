import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function useRichTextEditor(
  content: string,
  setHtml: (html: string) => void
) {
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
    content,
    editorProps: {
      attributes: {
        class: [
          "prose prose-invert",
          "w-full h-[calc(100vh-10rem)] p-2 md:p-4",
          "outline-none bg-stone-900 rounded-lg border border-stone-800",
          "overflow-auto scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent",
        ].join(" "),
      },
    },
    onUpdate: ({ editor }) => {
      setHtml(editor.getHTML());
    },
  });

  return editor;
}
