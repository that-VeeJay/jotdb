"use client";

import { Pencil } from "lucide-react";
import { type Note } from "@/lib/types";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
} from "@/components/ui";
import { useNoteContext } from "@/context/NoteContext";

export default function View({ note }: { note: Note }) {
  const { setIsEditing } = useNoteContext();

  const editNote = () => {
    setIsEditing(true);
  };

  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <span>{note.title}</span>
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
        <CardDescription className="text-xs">
          {note.created_at.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-9.5rem)] ">
          <p>{note.content}</p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
