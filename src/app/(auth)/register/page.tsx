import Link from "next/link";
import {
  Button,
  Label,
  Input,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>
          Please provide all necessary information
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="display_name">Display name</Label>
            <Input id="display_name" name="display_name" type="text" />
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
              type="password"
            />
          </div>
          <Button className="w-full">Create account</Button>
        </form>
      </CardContent>
      <CardFooter>
        <span>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login.
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
