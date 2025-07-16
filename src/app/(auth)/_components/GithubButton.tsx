import GitHubIcon from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui";

export default function GithubButton() {
  return (
    <Button variant="outline">
      <GitHubIcon />
      Sign in with GitHub
    </Button>
  );
}
