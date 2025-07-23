"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUserStore } from "@/store";

/**
 * This client-side component syncs the authenticated user's session data
 * from NextAuth into the Zustand store for global state access.
 *
 * It uses `useSession()` to get the session and updates the user store with:
 * - id
 * - name
 * - email
 * - image
 *
 * If no session exists (user is signed out), it clears the user store.
 *
 * This component renders nothing (returns null) and is intended to run only once on mount.
 */
export default function Session() {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: (session.user as any).id,
        name: session.user.name ?? null,
        email: session.user.email ?? null,
        image: session.user.image ?? null,
      });
    } else {
      setUser(null);
    }
  }, [session, setUser]);

  return null;
}
