"use server";

import { z } from "zod/v4";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { LoginSchema } from "@/lib/schemas";
import { createClient } from "@/utils/supabase/server";

type LoginResponse = {
  errors: {
    formErrors: string[];
    fieldErrors: Record<string, string[]>;
  };
};

export async function login(
  _previousState: unknown,
  formData: FormData
): Promise<LoginResponse | void> {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const parsed = LoginSchema.safeParse({ email, password });

  if (!parsed.success) return { errors: z.flattenError(parsed.error) };

  const { error } = await supabase.auth.signInWithPassword({ email, password });

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
