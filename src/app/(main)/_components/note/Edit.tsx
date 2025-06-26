import { useState } from "react";
import { Save, X } from "lucide-react";
import { type Note } from "@/lib/types";
import Spinner from "@/components/icons/Spinner";
import { useSaveNote } from "@/hooks/useSaveNote";
import { useNoteContext } from "@/context/NoteContext";
import { Button, Input, Textarea } from "@/components/ui";

export default function Edit({ note }: { note: Note }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const { isSaving, saveNoteHandler } = useSaveNote(note, title, content);
  const { setIsEditing } = useNoteContext();

  const handleCancel = () => setIsEditing(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    saveNoteHandler();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        id="title"
        name="title"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        id="content"
        name="content"
        placeholder="Jot down your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="h-[calc(100vh-7rem)] resize-none"
      />
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          onClick={handleCancel}
          variant="outline"
          size="sm"
        >
          <X />
          cancel
        </Button>
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
    </form>
  );
}
