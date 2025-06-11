import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ModeToggle } from "@/components/shared/ModeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "25rem",
          "--sidebar-width-mobile": "20rem",
        } as React.CSSProperties as Record<string, string>
      }
    >
      <AppSidebar />
      <main className="w-full">
        <div className="flex h-[2.5rem] items-center justify-between ">
          <SidebarTrigger />
          <ModeToggle />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
