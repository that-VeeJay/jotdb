import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import type { AuthenticatedUserInfo } from "@/lib/types";

export async function requireUser(): Promise<AuthenticatedUserInfo> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/login");

  const {
    id,
    email,
    user_metadata: { display_name },
  } = data.user;

  return {
    id,
    email: email ?? "",
    display_name: display_name ?? "",
  };
}

export async function redirectIfAuthenticated(): Promise<void> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) redirect("/");
}
