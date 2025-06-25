import { SidebarProvider } from "@/components/ui";
import { NoteProvider } from "@/context/NoteContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NoteProvider>
      <SidebarProvider>{children}</SidebarProvider>;
    </NoteProvider>
  );
}
