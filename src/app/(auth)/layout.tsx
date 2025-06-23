import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}
