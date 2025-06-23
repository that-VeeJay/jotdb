import { Button } from "@/components/ui";
import GitHubIcon from "@/components/icons/GithubIcon";

export default function GithubButton() {
  return (
    <Button variant="outline" disabled={true} className="w-full">
      <GitHubIcon />
      Login with GitHub
    </Button>
  );
}
