import {
  Button,
  Input,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog,
  DialogTrigger,
  DropdownMenuLabel,
} from "@/components/ui";
import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { createCategory } from "@/lib/actions/category";
import { useUserStore } from "@/store";
import Spinner from "@/components/icons/Spinner";
import { useCategoriesStore } from "@/store";

export default function CreateCategory() {
  const [category, setCategory] = useState("");
  const [isPending, startTransition] = useTransition();
  const userId = useUserStore((state) => state.user?.id);

  const handleSubmit = (formData: FormData) => {
    const category = formData.get("category") as string;

    startTransition(async () => {
      if (userId) {
        try {
          await createCategory(category, userId);
          await useCategoriesStore.getState().fetchCategories(userId);
          setCategory("");
        } catch (err) {
          console.log("Failed to create category:", err);
        }
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="ghost">
          <DropdownMenuLabel className="flex items-center gap-1">
            <span>Create new category</span>
            <Plus />
          </DropdownMenuLabel>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new category</DialogTitle>
          <DialogDescription>
            Give your category a unique name to better organize your notes. You
            can edit or delete it anytime.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-3">
          <Input
            id="category"
            name="category"
            type="text"
            placeholder="category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner />
                  <span>Please wait...</span>
                </>
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
