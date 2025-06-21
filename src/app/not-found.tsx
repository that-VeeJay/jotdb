import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Error code: <span className="text-foreground font-bold">404</span>
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Oops! Page not found.
        </h1>
        <p className="text-muted-foreground text-base">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
