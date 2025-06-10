import { Button } from "@/components/ui";
import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <Button variant="outline" className="w-full">
      <Github />
      Login with GitHub
    </Button>
  );
}
