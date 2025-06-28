import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";

export function useRichTextEditor(
  content: string,
  setHtml: (html: string) => void
) {
  const proseClass =
    "prose prose-invert w-full h-[calc(100vh-10rem)] p-2 md:p-4 outline-none dark:bg-stone-900 rounded-lg border dark:border-stone-800 overflow-auto scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-transparent";

  const bulletList = "list-disc ml-10";

  const orderedList = "list-decimal ml-10";

  const blockquoteClass =
    "border-l-4 w-full border-stone-500 pl-4 text-muted-foreground bg-muted/50 py-3 my-3";

  const codeInlineClass =
    "bg-red-200 dark:bg-stone-800 border dark:border-stone-700 rounded-lg py-1 px-2";

  const highlightClass = "rounded-xs";

  const codeBlockClass =
    "rounded-md border bg-stone-100 dark:bg-stone-950/50 dark:border-stone-800 p-4 font-mono text-sm overflow-x-auto";

  const editor = useEditor({
    content,
    onUpdate: ({ editor }) => {
      setHtml(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: proseClass,
      },
    },
    extensions: [
      StarterKit.configure({
        bulletList: { HTMLAttributes: { class: bulletList } },
        orderedList: { HTMLAttributes: { class: orderedList } },
        blockquote: { HTMLAttributes: { class: blockquoteClass } },
      }),
      Underline.configure({
        HTMLAttributes: { class: "underline" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
      }),
      Code.configure({
        HTMLAttributes: { class: codeInlineClass },
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: { class: highlightClass },
      }),
      CodeBlock.configure({
        HTMLAttributes: { class: codeBlockClass },
      }),
    ],
  });

  return editor;
}
