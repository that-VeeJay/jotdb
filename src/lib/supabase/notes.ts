import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export async function getNotes(user_id: string) {
  return await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });
}

export async function createNote(user_id: string) {
  return await supabase
    .from("notes")
    .insert({ user_id: user_id, title: "", content: "" })
    .select()
    .single();
}

export async function deleteNote(note_id: string) {
  return await supabase.from("notes").delete().eq("id", note_id);
}

export async function saveNote(
  title: string,
  content: string,
  note_id: string
) {
  return await supabase
    .from("notes")
    .update({ title, content })
    .eq("id", note_id)
    .select()
    .single();
}
