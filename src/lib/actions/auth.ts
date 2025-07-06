"use server";

import { signIn, signOut } from "@/auth";

export const githubSignin = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const googleSignin = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const userSignOut = async () => {
  await signOut({ redirectTo: "/sign-in" });
};
