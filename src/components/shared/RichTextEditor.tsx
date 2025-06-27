import { useDebounce } from "@/hooks/useDebounce";
import { EditorContent } from "@tiptap/react";
import { useState, useEffect } from "react";
import { useRichTextEditor } from "@/hooks/useRichTextEditor";
import Menubar from "./Menubar";
interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const [html, setHtml] = useState(content);
  const debouncedHtml = useDebounce(html, 1000);

  const editor = useRichTextEditor(content, setHtml);

  useEffect(() => {
    onChange(debouncedHtml);
  }, [debouncedHtml]);

  return (
    <>
      <Menubar editor={editor!} />
      <EditorContent editor={editor} className="w-full h-full" />
    </>
  );
}
