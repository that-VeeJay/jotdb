import { cn } from "@/lib/utils";

export function ShortcutKey({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-md border border-input bg-secondary px-2 py-1 text-sm font-medium font-mono text-muted-foreground shadow-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "active:scale-[0.98]",
        className
      )}
    >
      {children}
    </kbd>
  );
}
