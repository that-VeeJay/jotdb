"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui";
import { googleSignin } from "@/lib/actions/auth";
import GoogleIcon from "@/components/icons/GoogleIcon";
import Spinner from "@/components/icons/Spinner";

export default function GoogleButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => startTransition(() => googleSignin())}
      disabled={isPending}
      size="lg"
      className="w-xs"
    >
      {isPending ? (
        <>
          <Spinner />
          Signing in...
        </>
      ) : (
        <>
          <GoogleIcon />
          Sign in with Google
        </>
      )}
    </Button>
  );
}
