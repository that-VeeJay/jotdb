import { SidebarProvider } from "@/components/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
