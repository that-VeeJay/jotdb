import { Separator, Sidebar } from "@/components/ui";

import Toggle from "./sidebar/Toggle";
import Header from "./sidebar/Header";
import TopBar from "./sidebar/TopBar";
import Footer from "./sidebar/Footer";
import Content from "./sidebar/Content";

export function AppSidebar() {
  return (
    <>
      <Toggle />
      <Sidebar variant="floating">
        <TopBar />
        <Header />
        <Separator className="mt-2" />
        <Content />
        <Separator className="mb-2" />
        <Footer />
      </Sidebar>
    </>
  );
}
