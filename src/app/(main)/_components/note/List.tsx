"use client";

import Snackbar from "@/components/shared/Snackbar";
import { useNoteContext } from "@/context/NoteContext";
import Tile from "./Tile";

export default function List() {
  const { notes } = useNoteContext();

  return (
    <>
      {notes.length === 0 ? (
        <Snackbar message="No notes yet." type="info" />
      ) : (
        <>
          {notes.map((note) => (
            <Tile key={note.id} note={note} />
          ))}
        </>
      )}
    </>
  );
}
