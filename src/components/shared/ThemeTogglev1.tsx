"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  { name: "light", icon: Sun },
  { name: "dark", icon: Moon },
  { name: "system", icon: Laptop },
];

export function ThemeTogglev1() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-1 bg-muted p-1 rounded-full w-fit">
      {themes.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={cn(
            "p-1 rounded-full transition-colors",
            theme === name
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent"
          )}
          aria-label={`Switch to ${name} theme`}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
