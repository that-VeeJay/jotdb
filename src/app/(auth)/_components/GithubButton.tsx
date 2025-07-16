"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui";
import Spinner from "@/components/icons/Spinner";
import { signInWithGitHub } from "@/lib/actions/auth";
import GitHubIcon from "@/components/icons/GithubIcon";

export default function GithubButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={() => startTransition(() => signInWithGitHub())}
      type="submit"
      disabled={isPending}
      variant="outline"
      className="w-full"
    >
      <span className="flex items-center gap-2">
        {isPending ? (
          <>
            <Spinner />
            <span>Please wait...</span>
          </>
        ) : (
          <>
            <GitHubIcon />
            <span>Sign in with GitHub</span>
          </>
        )}
      </span>
    </Button>
  );
}
