import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = pageMetadata.notFound;

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Error code: <span className="font-bold text-foreground">404</span>
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Oops! Page not found.
        </h1>
        <p className="text-base text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
