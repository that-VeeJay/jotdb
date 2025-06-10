import { Separator } from "@/components/ui";

export default function FormDivider() {
  return (
    <div className="flex items-center py-5 gap-3">
      <Separator className="flex-1" />
      <span className="text-xs">Or continue with email</span>
      <Separator className="flex-1" />
    </div>
  );
}
