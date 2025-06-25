"use client";

import { AppSidebar } from "@/app/(main)/_components/AppSidebar";
import { useUserContext } from "@/context/UserContext";

export default function Home() {
  const { user } = useUserContext();

  console.log(user);

  return (
    <>
      <AppSidebar />
      <main className="w-full">HOMEPAGE</main>
    </>
  );
}
