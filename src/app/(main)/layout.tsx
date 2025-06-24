import { SidebarProvider } from "@/components/ui";
import { AppSidebar } from "@/app/(main)/_components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
