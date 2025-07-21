import { Check, Info, AlertTriangle, XCircle } from "lucide-react";

interface FlashMessageProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
}

const typeStyles = {
  success: {
    bg: "bg-green-500/70 dark:bg-green-900/50",
    border: "dark:border-green-800",
    text: "dark:text-green-100",
    Icon: Check,
  },
  info: {
    bg: "bg-blue-500/70 dark:bg-blue-900/50",
    border: "dark:border-blue-800",
    text: "dark:text-blue-100",
    Icon: Info,
  },
  warning: {
    bg: "bg-yellow-500/70 dark:bg-yellow-900/50",
    border: "dark:border-yellow-800",
    text: "dark:text-yellow-100",
    Icon: AlertTriangle,
  },
  error: {
    bg: "bg-red-500/70 dark:bg-red-900/50",
    border: "dark:border-red-800",
    text: "dark:text-red-100",
    Icon: XCircle,
  },
};

export default function FlashMessage({ message, type }: FlashMessageProps) {
  const { bg, border, text, Icon } = typeStyles[type];

  return (
    <div
      className={`flex items-center gap-2 p-2 dark:border rounded-md text-white ${bg} ${border} ${text}`}
    >
      <Icon size={18} />
      <span>{message}</span>
    </div>
  );
}
