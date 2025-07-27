import "server-only";

import { auth } from "../auth";
import { redirect } from "next/navigation";
import { cache } from "react";

export async function getUserIdOrThrow() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session.user.id;
}

export const requireUser = cache(async () => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) {
    // unsure
    redirect("/api/auth/login");
  }
  return user.id;
});
