"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@/lib/types";

type UserContextType = {
  user: User | null;
};
interface Props {
  children: ReactNode;
  initialUser: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children, initialUser }: Props) {
  const [user, setUser] = useState<User | null>(initialUser);
  const supabase = createClient();

  // fetch the authenticated user info and assign it to user state
  useEffect(() => {
    const fetchUser = async (): Promise<User | null> => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) return null;

      const { id, email, user_metadata } = data.user;
      return {
        id,
        email: email ?? "",
        name: user_metadata?.display_name ?? "",
      };
    };

    fetchUser().then(setUser);
  }, [initialUser]);

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
