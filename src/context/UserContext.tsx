"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@/lib/types";

type UserContextType = {
  user: User | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const fetchAuthenticatedUser = async (
  supabase: ReturnType<typeof createClient>
): Promise<User | null> => {
  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    const { id, email, user_metadata } = data.user;

    return {
      id,
      email: email || "",
      name: user_metadata?.display_name || "",
    };
  }

  console.warn("No user found:", error?.message);
  return null;
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await fetchAuthenticatedUser(supabase);
      setUser(currentUser);
    };
    loadUser();
  }, [supabase]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
