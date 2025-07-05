import { Button } from "@/components/ui";
import GitHubIcon from "@/components/icons/GithubIcon";

export default function GithubButton() {
  return (
    <Button size="lg" className="w-xs">
      <GitHubIcon />
      Sign in with GitHub
    </Button>
  );
}
