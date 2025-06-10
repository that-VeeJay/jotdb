import { Ban, CircleCheck, TriangleAlert, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AlertToast({
  message,
  type = "info",
  margin,
}: {
  message: string;
  type?: "error" | "success" | "warning" | "info";
  margin?: string;
}) {
  const toastConfig = {
    error: {
      icon: <Ban size={18} />,
      className:
        "bg-red-500/75 text-red-100 border-2 border-red-500/75 dark:bg-red-500/30 dark:border-red-800",
    },
    success: {
      icon: <CircleCheck size={18} />,
      className:
        "bg-green-500/75 text-green-100 border-2 border-green-500/75 dark:bg-green-500/30 dark:border-green-800",
    },
    warning: {
      icon: <TriangleAlert size={18} />,
      className:
        "bg-yellow-500/75 text-yellow-100 border-2 border-yellow-500/75 dark:bg-yellow-500/30 dark:border-yellow-800",
    },
    info: {
      icon: <Info size={18} />,
      className:
        "bg-red-500/75 text-red-100 border-2 border-red-500/75 dark:bg-red-500/30 dark:border-red-800",
    },
  };

  return (
    <div
      className={cn(
        `flex gap-2 items-center p-3 rounded-md ${margin}`,
        toastConfig[type].className
      )}
    >
      {toastConfig[type].icon}
      <span className="font-medium">{message}</span>
    </div>
  );
}
