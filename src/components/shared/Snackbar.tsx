import { CircleX, Info, Check, AlertTriangle } from "lucide-react";

type SnackbarProps = {
  message: string;
  type: "info" | "success" | "warning" | "error";
  margin?: string;
};

const iconMap = {
  info: Info,
  success: Check,
  warning: AlertTriangle,
  error: CircleX,
};

const styleMap = {
  info: "bg-blue-100 text-blue-700 border-blue-100 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700/50",
  success:
    "bg-green-100 text-green-700 border-green-100 dark:bg-green-900/50 dark:text-green-200 dark:border-green-700/50",
  warning:
    "bg-yellow-100 text-yellow-700 border-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-200 dark:border-yellow-700/50",
  error:
    "bg-red-100 text-red-700 border-red-100 dark:bg-red-900/50 dark:text-red-200 dark:border-red-700/50",
};

export default function Snackbar({ message, type, margin }: SnackbarProps) {
  const Icon = iconMap[type];
  const styles = styleMap[type];

  return (
    <div
      className={`px-3 py-2 border-2 rounded-lg text-base flex items-center gap-3 ${styles} ${
        margin ?? ""
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
