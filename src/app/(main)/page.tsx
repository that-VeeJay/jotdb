import { requireUser } from "@/utils/auth/user";
import { AppSidebar } from "@/app/(main)/_components/AppSidebar";
import MainScreen from "./_components/MainScreen";

export default async function Home() {
  await requireUser();

  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <div className="max-w-5xl mx-auto min-h-screen flex items-center justify-center px-2">
          <MainScreen />
        </div>
      </main>
    </>
  );
}
