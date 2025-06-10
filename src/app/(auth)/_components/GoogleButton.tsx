import { Button } from "@/components/ui";
import GoogleIcon from "@/components/shared/GoogleIcon";

export default function GoogleButton() {
  return (
    <Button variant="outline" className="w-full" disabled={true}>
      <GoogleIcon />
      Login with Google
    </Button>
  );
}
