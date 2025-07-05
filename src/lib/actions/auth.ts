"use server";

import { signIn } from "@/auth";

export const githubSignin = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const googleSignin = async () => {
  await signIn("google", { redirectTo: "/" });
};
