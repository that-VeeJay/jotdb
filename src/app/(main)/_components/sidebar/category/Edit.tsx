import { Button, Input } from "@/components/ui";
import { useCategoryActions } from "@/store/categoryActions-store";

export default function Edit({}) {
  const { setIsEditing } = useCategoryActions();

  return (
    <div className="space-y-3">
      <Input />
      <div className="flex justify-end gap-2">
        <Button onClick={() => setIsEditing(false)} variant="outline">
          Go back
        </Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}
