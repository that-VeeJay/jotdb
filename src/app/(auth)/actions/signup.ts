"use server";

import { z } from "zod/v4";
import { UserSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type SignupError = {
  errors: {
    formErrors: string[];
    fieldErrors: Record<string, string[]>;
  };
};

export async function signup(
  previousState: unknown,
  formData: FormData
): Promise<SignupError> {
  const supabase = await createClient();

  const data = {
    display_name: formData.get("display_name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  };

  const result = UserSchema.safeParse(data);

  if (!result.success) return { errors: z.flattenError(result.error) };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return {
      errors: {
        formErrors: [error.message],
        fieldErrors: {},
      },
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
