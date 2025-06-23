"use server";

import { z } from "zod/v4";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { LoginSchema } from "@/lib/schemas";
import { createClient } from "@/utils/supabase/server";

type LoginError = {
  errors: {
    formErrors: string[];
    fieldErrors: Record<string, string[]>;
  };
};

export async function login(
  previousState: unknown,
  formData: FormData
): Promise<LoginError> {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = LoginSchema.safeParse(data);

  if (!result.success) return { errors: z.flattenError(result.error) };

  const { error } = await supabase.auth.signInWithPassword(data);

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
