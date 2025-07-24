import { Settings2 } from "lucide-react";

import { useIsEditing, useIsDeleting } from "@/store/categoryActions-store";
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
  const isEditingCategory = useIsEditing();
  const isDeletingCategory = useIsDeleting();

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
        {isEditingCategory ? (
          <EditCategory />
        ) : isDeletingCategory ? (
          <DeleteCategory />
        ) : (
          <SelectCategory />
        )}
      </DialogContent>
    </Dialog>
  );
}
