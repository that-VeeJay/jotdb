import { AppSidebar } from "@/app/(main)/_components/AppSidebar";
import { requireUser } from "@/utils/auth/requireUser";
import MainScreen from "./_components/MainScreen";

export default async function Home() {
  await requireUser();

  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <div className="m-2">
          <div className="max-w-5xl mx-auto">
            <MainScreen />
          </div>
        </div>
      </main>
    </>
  );
}
