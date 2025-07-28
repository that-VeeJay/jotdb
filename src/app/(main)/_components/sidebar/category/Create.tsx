"use client";

import { FlashMessage } from "@/components/shared";
import { useActionState, useState } from "react";
import { useResetOnClose } from "@/hooks/useResetOnClose";
import { Plus } from "lucide-react";
import { InputErrorMessage } from "@/components/shared";
import { createCategoryAction } from "@/lib/actions/category";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@/components/ui";

export default function Create() {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(
    createCategoryAction,
    undefined
  );

  useResetOnClose(open, formAction);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="icon">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={formAction} className="space-y-5">
          <DialogHeader>
            <DialogTitle>Create new category</DialogTitle>
            <DialogDescription>
              Enter a name for your new category. You can use categories to
              group related notes and stay organized.
            </DialogDescription>
          </DialogHeader>
          {state?.success && state?.message && (
            <FlashMessage message={state.message} type="success" />
          )}
          <div className="space-y-1">
            <Label htmlFor="new-category">Category Name</Label>
            <div>
              <Input
                id="new-category"
                name="new-category"
                placeholder="e.g. Work, School, Ideas"
              />
              {!state?.success && state?.message && (
                <InputErrorMessage message={state.message} />
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Adding..." : "Add Category"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
