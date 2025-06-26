"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlAltN =
        (e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === "n";

      if (isCtrlAltN) {
        e.preventDefault();
        if (!isCreating) {
          createNewNote();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCreating, createNewNote]);

  return (
    <Button disabled={isCreating} onClick={createNewNote} variant="outline">
      {buttonContent}
    </Button>
  );
}
