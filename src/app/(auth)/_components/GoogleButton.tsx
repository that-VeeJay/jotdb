import { Button } from "@/components/ui";
import GoogleIcon from "@/components/icons/GoogleIcon";

export default function GoogleButton() {
  return (
    <Button className="w-full" variant="outline" disabled={true}>
      <GoogleIcon />
      Login with Google
    </Button>
  );
}
