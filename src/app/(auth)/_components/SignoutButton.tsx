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
      size="sm"
      disabled={isPending}
      variant="destructive"
      className="flex-1"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
