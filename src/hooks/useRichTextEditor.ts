import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import Underline from "@tiptap/extension-underline";
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
            class: "list-disc ml-10",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-10",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class:
              "border-l-4 w-full border-stone-500 pl-4 text-muted-foreground bg-muted/50 py-3 my-3",
          },
        },
      }),
      Underline.configure({
        HTMLAttributes: {
          class: "underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
      }),
      Code.configure({
        HTMLAttributes: {
          class:
            "bg-red-200 dark:bg-stone-800 border dark:border-stone-700 rounded-lg py-1 px-2",
        },
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: "rounded-xs",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: [
          "prose prose-invert",
          "w-full h-[calc(100vh-10rem)] p-2 md:p-4",
          "outline-none dark:bg-stone-900 rounded-lg border dark:border-stone-800",
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
