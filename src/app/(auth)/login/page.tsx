import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/components/ui";

export default function LoginPage() {
  return (
    <Card className="max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription>
          Please provide all necessary information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
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

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <span className="block text-center">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold hover:underline">
            Register.
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}
