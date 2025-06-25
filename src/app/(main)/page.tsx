import { AppSidebar } from "@/app/(main)/_components/AppSidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/login");

  return (
    <>
      <AppSidebar />
      <main className="w-full">HOMEPAGE</main>
    </>
  );
}
