import { Button } from "@/components/ui";
import GithubIcon from "@/components/icons/GithubIcon";

export default function GithubButton() {
  return (
    <Button className="w-full" variant="outline">
      <GithubIcon />
      Login with GitHub
    </Button>
  );
}
