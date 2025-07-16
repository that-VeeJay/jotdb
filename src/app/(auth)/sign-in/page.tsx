import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui";

import SigninForm from "../_components/SigninForm";
import GithubButton from "../_components/GithubButton";
import GoogleButton from "../_components/GoogleButton";

export default function SignIn() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <GithubButton />
          <GoogleButton />
        </div>
        <Divider />
        <SigninForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-center text-sm">
          <span>Don't have an account?</span>
          <Link href="/sign-up" className="font-semibold ml-1 hover:underline">
            Sign up.
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-5">
      <Separator className="flex-1" />
      <span className="text-xs text-muted-foreground">
        or continue with email
      </span>
      <Separator className="flex-1" />
    </div>
  );
}
