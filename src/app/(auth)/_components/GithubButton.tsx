import { Button } from "@/components/ui";
import GithubIcon from "@/components/icons/GithubIcon";

export default function GithubButton() {
  return (
    <Button className="w-full" variant="outline" disabled={true}>
      <GithubIcon />
      Login with GitHub
    </Button>
  );
}
