import "server-only";

import { auth } from "../auth";
import { redirect } from "next/navigation";
import { cache } from "react";

export const requireUser = cache(async () => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) {
    // unsure
    redirect("/sign-in");
  }
  return user.id;
});
