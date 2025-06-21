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
import FormField from "../_components/FormField";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription>
          Please provide all necessary information
        </CardDescription>
      </CardHeader>
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
