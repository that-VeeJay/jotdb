import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { type Note } from "@/lib/types";
import { getNotes } from "@/lib/supabase/notes";

export function useFetchNotes(
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
) {
  useEffect(() => {
    const fetchNotes = async () => {
      const supabase = createClient();
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      const user = userData?.user;

      if (!user || userError) {
        console.error("Failed to get user: ", userError?.message);
        return;
      }

      const { data: notesData, error: notesError } = await getNotes(user.id);

      if (notesError) {
        console.error("Failed to get notes: ", notesError?.message);
        return;
      }

      setNotes(notesData || []);
    };

    fetchNotes();
  }, [setNotes]);
}
