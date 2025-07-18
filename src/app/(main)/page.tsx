import { AppSidebar } from "./_components/sidebar/AppSidebar";

export default async function Home() {
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <h1>THIS IS A SAMPLE TEXT</h1>
      </main>
    </>
  );
}
