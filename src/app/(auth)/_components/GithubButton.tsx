"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui";
import { githubSignin } from "@/lib/actions/auth";
import GitHubIcon from "@/components/icons/GithubIcon";
import Spinner from "@/components/icons/Spinner";

export default function GithubButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => startTransition(() => githubSignin())}
      disabled={isPending}
      variant="outline"
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
          {" "}
          <GitHubIcon />
          Sign in with GitHub
        </>
      )}
    </Button>
  );
}
