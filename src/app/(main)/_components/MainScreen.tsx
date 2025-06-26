"use client";

import { useNoteContext } from "@/context/NoteContext";
import View from "./note/View";
import Edit from "./note/Edit";

export default function MainScreen() {
  const { isEditing, activeNote } = useNoteContext();

  const renderContent = () => {
    if (activeNote && isEditing) return <Edit note={activeNote} />;

    if (activeNote) return <View note={activeNote} />;

    return null;
  };

  return <div>{renderContent()}</div>;
}
