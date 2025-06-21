import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
      <main>{children}</main>
    </main>
  );
}
