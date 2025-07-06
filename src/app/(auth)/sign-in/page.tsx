import { ThemeToggle } from "@/components/shared/ThemeToggle";
import GoogleButton from "../_components/GoogleButton";
import GithubButton from "../_components/GithubButton";

export default async function SignIn() {
  return (
    <main className="relative flex items-center justify-center min-h-screen">
      <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-3">
        <GithubButton />
        <GoogleButton />
      </div>
    </main>
  );
}
