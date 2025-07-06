import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar/AppSidebar";

export default async function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="absolute" />
        <div>THIS IS THE CONTENT</div>
      </main>
    </SidebarProvider>
  );
}
