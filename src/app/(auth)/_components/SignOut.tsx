import { signOut } from "@/auth";
import { Button } from "@/components/ui";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/sign-in" });
      }}
    >
      <Button variant="destructive" className="w-fit">
        Sign Out
      </Button>
    </form>
  );
}
