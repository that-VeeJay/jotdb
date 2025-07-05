import { Button } from "@/components/ui";
import GoogleIcon from "@/components/icons/GoogleIcon";

export default function GoogleButton() {
  return (
    <Button size="lg" className="w-xs">
      <GoogleIcon />
      Sign in with Google
    </Button>
  );
}
