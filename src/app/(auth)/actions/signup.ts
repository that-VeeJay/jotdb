"use server";

import { z } from "zod/v4";
import { RegisterSchema } from "@/lib/schemas";
import { createClient } from "@/utils/supabase/server";

type SignupResponse = {
  type: "error" | "success";
  message: {
    formErrors?: string[];
    fieldErrors?: Record<string, string[]>;
  };
};

export async function signup(
  _previousState: unknown,
  formData: FormData
): Promise<SignupResponse> {
  const supabase = await createClient();

  const data = {
    display_name: formData.get("display_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  };

  const parsed = RegisterSchema.safeParse(data);

  if (!parsed.success)
    return { type: "error", message: z.flattenError(parsed.error) };

  const { email, password, display_name } = parsed.data;
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name,
      },
    },
  });

  if (error) {
    return {
      type: "error",
      message: {
        formErrors: [error.message],
        fieldErrors: {},
      },
    };
  }

  return { type: "success", message: {} };
}
