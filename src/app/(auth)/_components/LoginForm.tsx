"use client";

import { Label, Input, Button } from "@/components/ui";
import { useActionState } from "react";
import { login } from "../actions";
import InputError from "./InputError";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  return (
    <>
      <div>
        {typeof state?.message === "string" && state.message && (
          <div>{state.message}</div>
        )}
      </div>
      <form action={formAction} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" />
          {typeof state?.message === "object" && state.message?.email && (
            <InputError message={state.message.email[0]} />
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
          {typeof state?.message === "object" && state.message?.password && (
            <InputError message={state.message.password[0]} />
          )}
        </div>
        <Button
          disabled={isPending}
          className="w-full font-semibold tracking-wider"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </>
  );
}
