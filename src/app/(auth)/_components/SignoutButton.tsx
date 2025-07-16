"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui";
import { signOutUser } from "@/lib/actions/auth";

export default function SignoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => startTransition(() => signOutUser())}
      type="submit"
      disabled={isPending}
      variant="destructive"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
