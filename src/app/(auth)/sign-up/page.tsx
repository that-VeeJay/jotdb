import SignupForm from "../_components/SignupForm";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          Fill in the details to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-center text-sm">
          <span>Already have an account?</span>
          <Link href="/sign-in" className="font-semibold ml-1 hover:underline">
            Sign in.
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
