"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui";
import { userSignOut } from "@/lib/actions/auth";
import Spinner from "@/components/icons/Spinner";

export default function SignOut() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => startTransition(() => userSignOut())}
      variant="outline"
      disabled={isPending}
      className="flex-1"
    >
      <span className="text-destructive">
        {isPending ? (
          <div className="flex items-center gap-1">
            <Spinner />
            <span>Please wait...</span>
          </div>
        ) : (
          "Log out"
        )}
      </span>
    </Button>
  );
}
