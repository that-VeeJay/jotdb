import Link from "next/link";
import {
  Button,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

export default function RegistrationPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>
          Please provide all necessary information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <div>
            <Label htmlFor="display_name" className="mb-1">
              Display name
            </Label>
            <Input id="display_name" type="text" name="display_name" />
          </div>

          <div>
            <Label htmlFor="email" className="mb-1">
              Email
            </Label>
            <Input id="email" type="email" name="email" />
          </div>

          <div>
            <Label htmlFor="password" className="mb-1">
              Password
            </Label>
            <Input id="password" type="password" name="password" />
          </div>

          <div>
            <Label htmlFor="confirm_password" className="mb-1">
              Confirm Password
            </Label>
            <Input
              id="confirm_password"
              type="password"
              name="confirm_password"
            />
          </div>

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <span className="block text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login.
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
