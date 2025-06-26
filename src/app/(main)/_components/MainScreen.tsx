"use client";

import { useNoteContext } from "@/context/NoteContext";
import DefaultView from "./ui/DefaultView";
import View from "./note/View";
import Edit from "./note/Edit";

export default function MainScreen() {
  const { isEditing, activeNote } = useNoteContext();

  if (!activeNote) return <DefaultView />;

  return isEditing ? <Edit note={activeNote} /> : <View note={activeNote} />;
}
