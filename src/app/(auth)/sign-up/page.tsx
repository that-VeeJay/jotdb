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

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm sm:bg-none!">
      <CardHeader>
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>
          Fill in the details below to sign up and get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="space-y-1">
            <Label htmlFor="name">Display name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              className="h-10 text-base px-3"
              autoComplete="name"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="h-10 text-base px-3"
              autoComplete="email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="h-10 text-base px-3"
              autoComplete="password"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="h-10 text-base px-3"
            />
          </div>
          <Button type="submit">Create account</Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm">
        Already have an account?
        <Link href="/sign-in" className=" hover:underline font-medium pl-1">
          Sign in.
        </Link>
      </CardFooter>
    </Card>
  );
}
