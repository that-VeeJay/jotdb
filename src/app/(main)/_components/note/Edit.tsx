import RichTextEditor from "@/components/shared/RichTextEditor";
import { useEffect, useState } from "react";
import { FileWarning, Save, X } from "lucide-react";
import { type Note } from "@/lib/types";
import Spinner from "@/components/icons/Spinner";
import { useSaveNote } from "@/hooks/useSaveNote";
import { useNoteContext } from "@/context/NoteContext";
import {
  Button,
  Input,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";

export default function Edit({ note }: { note: Note }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [isDirty, setIsDirty] = useState(false);

  const { isSaving, saveNoteHandler } = useSaveNote(note, title, content);
  const { setIsEditing, setActiveNote } = useNoteContext();

  useEffect(() => {
    const normalize = (str: string) => str.trim().replace(/\s+/g, " ");

    const isSame =
      normalize(title) === normalize(note.title) &&
      normalize(content) === normalize(note.content);

    setIsDirty(!isSame);
  }, [title, content, note]);

  const handleCancel = () => {
    setIsEditing(false);
    setActiveNote(note);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    saveNoteHandler();
    setIsDirty(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 w-full">
      <Input
        id="title"
        name="title"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <RichTextEditor content={content} onChange={setContent} />

      <div className="flex justify-end gap-3 items-center">
        {isDirty && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span aria-label="Unsaved changes">
                <FileWarning size={18} stroke="red" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>You have unsaved changes.</p>
            </TooltipContent>
          </Tooltip>
        )}

        <Button
          type="button"
          onClick={handleCancel}
          variant="outline"
          size="sm"
        >
          <X />
          cancel
        </Button>
        <div className="relative">
          <Button disabled={isSaving} type="submit" size="sm">
            {isSaving ? (
              <div className="flex items-center gap-2">
                <Spinner />
                Saving...
              </div>
            ) : (
              <>
                <Save />
                Save
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
