import { Card } from "@/components/ui";
import SignOut from "./(auth)/_components/SignOut";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="w-md p-8">
        <div className="items-center flex flex-col gap-3">
          <span>Signed in as:</span>
          <p>{session?.user?.name}</p>
          <SignOut />
        </div>
      </Card>
    </main>
  );
}
