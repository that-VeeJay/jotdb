import { useState, useTransition } from "react";

import { Button, Input } from "@/components/ui";
import type { ActionResponse } from "@/lib/types";
import { deleteCategory } from "@/lib/actions/category";
import { useCategoriesStore, useUserStore } from "@/store";
import {
  Annotation,
  FlashMessage,
  InputErrorMessage,
} from "@/components/shared";
import {
  useCategoryActions,
  useSelectedCategory,
} from "@/store/categoryActions-store";

export default function Delete() {
  const userId = useUserStore((state) => state.user?.id);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);
  const selectedCategory = useSelectedCategory();
  const { setIsDeleting } = useCategoryActions();

  if (!selectedCategory || !userId) return;

  const [confirmationInput, setConfirmationInput] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const [isPending, startTransition] = useTransition();

  const [actionResponse, setActionResponse] = useState<ActionResponse | null>(
    null
  );

  const expectedValue = `DELETE-${selectedCategory.name.toUpperCase()}`;

  const handleDelete = () => {
    const isValid = confirmationInput.trim() === expectedValue;

    if (!isValid) {
      setConfirmationError("Confirmation does not match the expected value.");
      return;
    }

    startTransition(async () => {
      const result = await deleteCategory(selectedCategory.name, userId);

      if (result?.status === "error") {
        setActionResponse({
          type: "error",
          message: "Oops! That didn’t work. Try again in a moment.",
        });
      }

      if (result?.status === "success") {
        await fetchCategories(userId);
        setConfirmationInput("");
        setConfirmationError("");
        setActionResponse({
          type: "success",
          message: "You’ve successfully deleted the category.",
        });
      }
    });
  };

  return (
    <div className="space-y-3">
      <Annotation>
        Note: Deleting a category will move all its notes to the{" "}
        <em>Unsorted</em> category.
      </Annotation>

      {actionResponse && (
        <FlashMessage
          message={actionResponse.message}
          type={actionResponse.type ?? "info"}
        />
      )}
      <div>
        <p className="text-muted-foreground">
          To confirm, type <strong>{expectedValue}</strong> in the box below
        </p>

        <div>
          <Input
            type="text"
            value={confirmationInput}
            onChange={(e) => setConfirmationInput(e.target.value)}
          />
          {confirmationError && (
            <InputErrorMessage message={confirmationError} />
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsDeleting(false)}
        >
          Go back
        </Button>
        <Button
          type="button"
          variant="destructive"
          disabled={!confirmationInput || isPending}
          onClick={handleDelete}
        >
          {isPending ? "Please wait..." : "Delete"}
        </Button>
      </div>
    </div>
  );
}
