import { useState } from "react";

import { Settings2 } from "lucide-react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import EditCategory from "./Edit";
import SelectCategory from "./List";
import DeleteCategory from "./Delete";

export default function ActionsModal() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Settings2 size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actions</DialogTitle>
          <DialogDescription>
            Edit or delete an existing category.
          </DialogDescription>
        </DialogHeader>
        {isEditing ? (
          <EditCategory />
        ) : isDeleting ? (
          <DeleteCategory />
        ) : (
          <SelectCategory />
        )}
      </DialogContent>
    </Dialog>
  );
}
