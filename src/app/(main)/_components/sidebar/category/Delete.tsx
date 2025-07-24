import { Button, Input } from "@/components/ui";
import Annotation from "@/components/shared/Annotation";

export default function Delete() {
  return (
    <div className="space-y-3">
      <Annotation>
        Note: Deleting a category will move all its notes to the{" "}
        <em>Unsorted</em> category.
      </Annotation>
      <span className="text-muted-foreground">
        To confirm, type <strong>CATEGORY_NAME</strong> in the box below
      </span>
      <div>
        <Input type="text" />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
