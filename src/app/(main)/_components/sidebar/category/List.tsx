import { formatString } from "@/lib/utils";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Dialog,
  DialogTrigger,
} from "@/components/ui";
import { useCategoriesStore } from "@/store";
import { Settings2 } from "lucide-react";
import ActionsDialog from "./ActionsDialog";

export default function List() {
  const categories = useCategoriesStore((state) => state.categories);
  const activeCategory = useCategoriesStore((state) => state.activeCategory);
  const setActiveCategory = useCategoriesStore(
    (state) => state.setActiveCategory
  );

  function handleCategoryChange(name: string) {
    const category = categories.find((cat) => cat.name === name);
    if (category) {
      setActiveCategory({ id: category.id, name: category.name });
    }
  }

  return (
    <DropdownMenuRadioGroup
      value={activeCategory?.name}
      onValueChange={handleCategoryChange}
    >
      {categories.map((category) => (
        <DropdownMenuRadioItem
          key={category.id}
          value={category.name}
          className="group flex items-center justify-between gap-2"
        >
          <span>{formatString(category.name)}</span>

          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="invisible group-hover:visible text-muted-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Settings2 />
              </button>
            </DialogTrigger>
            <ActionsDialog />
          </Dialog>
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}
                                                                                                   