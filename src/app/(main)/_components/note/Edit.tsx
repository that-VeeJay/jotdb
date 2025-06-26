import { useState } from "react";
import { Save, X } from "lucide-react";
import { type Note } from "@/lib/types";
import { saveNote } from "@/lib/supabase/notes";
import { useNoteContext } from "@/context/NoteContext";
import { Button, Input, Textarea } from "@/components/ui";

export default function Edit({ note }: { note: Note }) {
  const { setIsEditing, setNotes, setActiveNote } = useNoteContext();

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await saveNote(title, content, note.id);

    if (error) {
      console.error("Error updating note:", error);
      return;
    }

    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === note.id ? (data as Note) : n))
    );

    setActiveNote(data as Note);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSave} className="space-y-2">
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
        <Button type="submit" size="sm">
          <Save />
          Save
        </Button>
      </div>
    </form>
  );
}
