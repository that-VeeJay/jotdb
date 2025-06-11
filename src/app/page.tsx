import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui";
import { signout } from "./(auth)/actions";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold">
        HOME PAGE {user?.email || "Guest"}
      </h1>
      <form action={signout}>
        <Button>Sign Out</Button>
      </form>
    </div>
  );
}
