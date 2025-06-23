import Link from "next/link";
import {
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
import LoginForm from "../_components/LoginForm";

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
          <LoginForm />
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
