import { Pencil } from "lucide-react";
import { type Note } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useNoteContext } from "@/context/NoteContext";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
} from "@/components/ui";

export default function View({ note }: { note: Note }) {
  const { setIsEditing } = useNoteContext();

  const editNote = () => setIsEditing(true);

  const fixedContent = note.content.replace(/<p><\/p>/g, "<p><br></p>");

  return (
    <Card className="bg-transparent border-none w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">{note.title || "Untitled note"}</span>
              <CardDescription className="text-xs font-thin">
                {formatDate(note.created_at)}
              </CardDescription>
            </div>
            <Button
              type="button"
              onClick={editNote}
              size="icon"
              variant="outline"
            >
              <Pencil />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-11rem)]">
          <div
            className="prose prose-invert max-w-none whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: fixedContent }}
          />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
