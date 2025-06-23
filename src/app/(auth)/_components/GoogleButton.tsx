import { Button } from "@/components/ui";
import GoogleIcon from "@/components/icons/GoogleIcon";

export default function GoogleButton() {
  return (
    <Button variant="outline" disabled={true} className="w-full">
      <GoogleIcon />
      Login with Google
    </Button>
  );
}
