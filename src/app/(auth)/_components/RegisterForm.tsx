"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui";
import Spinner from "@/components/icons/Spinner";
import Snackbar from "@/components/shared/Snackbar";
import FormField from "./FormField";
import { signup } from "../actions/signup";

const INITIAL_VALUE = { display_name: "", email: "" };

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(signup, undefined);
  const [formValue, setFormValue] = useState(INITIAL_VALUE);

  const formError = state?.errors.formErrors?.[0];
  const fieldErrors = state?.errors.fieldErrors;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormValue({ ...formValue, [field]: e.target.value });
  };

  return (
    <>
      {formError && (
        <Snackbar
          message="Account creation failed. Please try again."
          type="error"
          margin="mb-4"
        />
      )}
      <form action={formAction} className="space-y-5">
        <FormField
          label="Display name"
          id="display_name"
          name="display_name"
          type="text"
          value={formValue.display_name}
          onChange={(e) => handleChange(e, "display_name")}
          error={fieldErrors?.display_name?.[0]}
        />

        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={(e) => handleChange(e, "email")}
          error={fieldErrors?.email?.[0]}
        />

        <FormField
          label="Password"
          id="password"
          name="password"
          type="password"
          error={
            fieldErrors?.password?.[0] || fieldErrors?.confirm_password?.[0]
          }
        />

        <FormField
          label="Confirm Password"
          id="confirm_password"
          name="confirm_password"
          type="password"
        />

        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Spinner />
              Creating account...
            </span>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </>
  );
}
