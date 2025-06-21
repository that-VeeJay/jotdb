import Link from "next/link";
import {
  Separator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import FormField from "../_components/FormField";
import GoogleButton from "../_components/GoogleButton";
import GithubButton from "../_components/GithubButton";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription>
          Please provide all necessary information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <GoogleButton />
        <GithubButton />
        <div className="mt-3 flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs">or continue with email</span>
          <Separator className="flex-1" />
        </div>
      </CardContent>
      <CardContent>
        <form className="space-y-5">
          <FormField id="email" name="email" type="email" label="Email" />

          <FormField
            id="password"
            name="password"
            type="password"
            label="Password"
          />

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
