import type { NotePreview } from "../types";

export async function fetchUserNotePreviews(
  categoryId: string
): Promise<NotePreview[]> {
  const response = await fetch(`/api/notes?categoryId=${categoryId}`);
  if (!response.ok) throw new Error("Failed to fetch notes preview");
  return response.json();
}
