"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui";
import Spinner from "@/components/icons/Spinner";
import Snackbar from "@/components/shared/Snackbar";
import FormField from "./FormField";
import { login } from "../actions/login";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, undefined);

  const isAuthError = state?.errors.formErrors?.[0];
  const fieldErrors = state?.errors.fieldErrors;

  return (
    <>
      {isAuthError && (
        <Snackbar
          message="Account not found. Please make sure your details are correct."
          type="error"
          margin="mb-4"
        />
      )}
      <form action={formAction} className="space-y-5">
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          error={fieldErrors?.email?.[0]}
        />

        <FormField
          label="Password"
          id="password"
          name="password"
          type="password"
          error={fieldErrors?.password?.[0]}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Spinner />
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </>
  );
}
