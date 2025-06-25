import Link from "next/link";
import { redirectIfAuthenticated } from "@/utils/auth/requireUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

import RegisterForm from "../_components/RegisterForm";

export default async function RegisterPage() {
  await redirectIfAuthenticated();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>
          Fill out the form to create a new account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <RegisterForm />
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
