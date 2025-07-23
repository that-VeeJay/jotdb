import { useEffect, useState } from "react";

/**
 * Custom React hook that determines if the component has been hydrated on the client.
 *
 * This is useful in Next.js or any SSR (Server-Side Rendering) context where
 * components may need to wait until they are fully mounted on the client
 * before performing certain actions (e.g., accessing `window`, using DnD, etc.).
 *
 * @returns {boolean} `true` if the component has been hydrated on the client; otherwise, `false`.
 *
 * @example
 * const hydrated = useHydrated();
 * if (!hydrated) return null;
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
