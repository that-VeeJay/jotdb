import { Label, Input } from "@/components/ui";

type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function FormField({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor="display_name">{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-500 text-sm">*{error}.</span>}
    </div>
  );
}
