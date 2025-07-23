import { create } from "zustand";
import type { UserSession } from "@/lib/types";

interface UserStore {
  user: UserSession | null;
  setUser: (user: UserSession | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
