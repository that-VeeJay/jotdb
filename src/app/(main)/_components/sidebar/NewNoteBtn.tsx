"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui";
import Spinner from "@/components/icons/Spinner";
import { useCreateNote } from "@/hooks/useCreateNote";

export default function NewNoteBtn() {
  const { isCreating, createNewNote } = useCreateNote();

  const buttonContent = isCreating ? (
    <div className="flex items-center gap-2">
      <Spinner />
      Creating new note...
    </div>
  ) : (
    <>
      New note
      <Plus />
    </>
  );

  return (
    <Button disabled={isCreating} onClick={createNewNote} variant="outline">
      {buttonContent}
    </Button>
  );
}
