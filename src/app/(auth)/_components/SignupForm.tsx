import { Input, Button } from "@/components/ui";
import { Label } from "@radix-ui/react-label";

export default function SignupForm() {
  return (
    <form className="space-y-3">
      <div className="space-y-1">
        <Label htmlFor="name">Display name</Label>
        <Input id="name" name="name" type="text" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="confirm_password">Confirm Password</Label>
        <Input
          id="confirm_password"
          name="confirm_password"
          type="confirm_password"
        />
      </div>
      <Button type="submit" className="w-full">
        Create an account
      </Button>
    </form>
  );
}
