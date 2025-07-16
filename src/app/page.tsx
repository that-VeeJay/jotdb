import { auth } from "@/lib/auth";
import { Card, CardContent } from "@/components/ui";
import SignoutButton from "./(auth)/_components/SignoutButton";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col items-center gap-3">
          <p>Welcome! {session?.user?.name || "Guest"}</p>
          <SignoutButton />
        </CardContent>
      </Card>
    </main>
  );
}
