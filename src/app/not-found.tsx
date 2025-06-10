import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="center min-h-screen">
      <div>
        <p>
          Error code: <span className="font-bold">404</span>
        </p>
        <h1 className="text-5xl font-bold">OOPS!!</h1>
        <p className="mb-2">This is not the page you are looking for.</p>
        <Button>Go back home</Button>
      </div>
    </main>
  );
}
