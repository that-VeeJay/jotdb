import { AppSidebar } from "@/app/(main)/_components/AppSidebar";
import { requireUser } from "@/utils/auth/requireUser";

export default async function Home() {
  const user = await requireUser();

  return (
    <>
      <AppSidebar />
      <main className="w-full">HOMEPAGE</main>
    </>
  );
}
