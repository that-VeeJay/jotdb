import Link from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";
import FormField from "../_components/FormField";

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
          <FormField
            id="display_name"
            name="display_name"
            type="text"
            label="Display name"
          />

          <FormField id="email" name="email" type="email" label="Email" />

          <FormField
            id="password"
            name="password"
            type="password"
            label="Password"
          />
          <FormField
            id="confirm_password"
            name="confirm_password"
            type="password"
            label="Confirm Password"
          />
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
