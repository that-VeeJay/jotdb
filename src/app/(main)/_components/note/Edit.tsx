import { Save, X } from "lucide-react";
import { Input, Textarea, Button } from "@/components/ui";

export default function Edit() {
  return (
    <form className="space-y-2">
      <Input
        id="title"
        name="title"
      />
      <Textarea
        id="content"
        name="content"
        className="h-[calc(100vh-7rem)] resize-none"
      />
      <div className="flex justify-end gap-3">
        <Button variant="outline" size="sm">
          <X />
          cancel
        </Button>
        <Button size="sm">
          <Save />
          Save
        </Button>
      </div>
    </form>
  );
}
