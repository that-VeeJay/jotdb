import GoogleIcon from "@/components/icons/GoogleIcon";
import { Button } from "@/components/ui";

export default function GoogleButton() {
  return (
    <Button variant="outline">
      <GoogleIcon />
      Sign in with Google
    </Button>
  );
}
