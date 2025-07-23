import { useState, useTransition } from "react";
import { Plus } from "lucide-react";
import { useUserStore } from "@/store";
import { useCategoriesStore } from "@/store";
import Spinner from "@/components/icons/Spinner";
import { addCategorySchema } from "@/lib/schema";
import { createCategory } from "@/lib/actions/category";
import FlashMessage from "@/components/shared/FlashMessage";
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
  DropdownMenuLabel,
  Input,
} from "@/components/ui";

interface FeedBack {
  type: "error" | "success";
  message: string;
}

export default function Create() {
  const userId = useUserStore((state) => state.user?.id);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

  const [category, setCategory] = useState("");
  const [feedback, setFeedback] = useState<FeedBack | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    const categoryEntry = formData.get("category");
    const category = typeof categoryEntry === "string" ? categoryEntry : "";

    const parsed = addCategorySchema.safeParse({ category });
    if (!parsed.success) {
      setFeedback({ type: "error", message: parsed.error.issues[0].message });
      return;
    }

    setFeedback(null);

    startTransition(async () => {
      if (!userId) return;

      const result = await createCategory(category, userId);
      if (!result) return;

      const { status, type } = result;

      if (status === "error" && type === "CATEGORY_DUPLICATE") {
        setFeedback({
          type: "error",
          message: "A category with this name already exists.",
        });
      }

      if (status === "success" && type === "CATEGORY_CREATED") {
        await fetchCategories(userId);
        setCategory("");
        setFeedback({
          type: "success",
          message: "Category created successfully!",
        });
      }
    });
  };

  const handleCancel = () => {
    setCategory("");
    setFeedback(null);
  };

  function Form() {
    return (
      <form action={handleSubmit} className="space-y-3">
        {feedback && (
          <FlashMessage type={feedback.type} message={feedback.message} />
        )}
        <div>
          <Input
            id="category"
            name="category"
            type="text"
            placeholder="category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" disabled={isPending || !category}>
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
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="ghost">
          <DropdownMenuLabel className="flex items-center gap-1">
            Create new category
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
        {Form()}
      </DialogContent>
    </Dialog>
  );
}
