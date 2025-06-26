import { ShortcutKey } from "@/components/ui";

const shortcuts = [
  { label: "Open sidebar", keys: ["Ctrl", "B"] },
  { label: "New note", keys: ["Ctrl", "Alt", "N"] },
];

export default function DefaultView() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="text-[5rem] md:text-[10rem] font-bold text-stone-200 dark:text-stone-900/50">
          JOTDB
        </div>

        <div className="hidden md:flex flex-col gap-4 mt-4">
          {shortcuts.map((shortcut) => (
            <div key={shortcut.label} className="flex gap-8 items-center">
              <p className="w-40 text-right text-muted-foreground dark:text-stone-600">
                {shortcut.label}
              </p>
              <div className="flex items-center gap-2">
                {shortcut.keys.map((key, i) => (
                  <div key={i} className="flex items-center">
                    <ShortcutKey>{key}</ShortcutKey>
                    {i < shortcut.keys.length - 1 && (
                      <span className="ml-2">+</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
