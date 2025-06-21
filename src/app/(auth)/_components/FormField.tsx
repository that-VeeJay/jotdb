import { Label, Input } from "@/components/ui";

type FormFieldProps = {
  label: string;
  name: string;
  id: string;
  type: string;
};

export default function FormField({ label, name, id, type }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} name={name} />
    </div>
  );
}
