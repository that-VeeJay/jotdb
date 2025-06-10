import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import { ModeToggle } from "@/components/shared/ModeToggle";
import GithubButton from "../_components/GithubButton";
import LoginForm from "../_components/LoginForm";
import FormDivider from "../_components/FormDivider";
import GoogleButton from "../_components/GoogleButton";

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="w-full max-w-sm p-6 ">
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide">LOGIN</CardTitle>
          <CardDescription>
            Please provide necessary credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <GoogleButton />
            <GithubButton />
          </div>
          <FormDivider />
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
