import Link from "next/link";
import {
  Button,
  Label,
  Input,
  Separator,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

import GithubButton from "../_components/GithubButton";
import GoogleButton from "../_components/GoogleButton";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <GithubButton />
            <GoogleButton />
          </div>
          <div className="flex items-center gap-3 my-6">
            <Separator className="flex-1" />
            <span className="text-xs">Or continue with email</span>
            <Separator className="flex-1" />
          </div>
          <form className="space-y-5">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
            </div>

            <Button className="w-full">Login</Button>
          </form>
        </CardContent>
        <CardFooter>
          <span>
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold hover:underline">
              Register.
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
