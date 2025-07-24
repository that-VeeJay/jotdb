import { Button, Input } from "@/components/ui";

export default function Edit({}) {
  return (
    <div className="space-y-3">
      <Input />
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}
