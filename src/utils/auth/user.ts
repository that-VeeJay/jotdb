import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import { type User } from "@/lib/types";

export async function getUser(): Promise<User | null> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) return null;

  const {
    id,
    email,
    user_metadata: { display_name },
  } = data.user;

  return {
    id,
    email: email ?? "",
    name: display_name ?? "",
  };
}

export async function requireUser(): Promise<void> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/login");
}

export async function redirectIfAuthenticated(): Promise<void> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) redirect("/");
}
