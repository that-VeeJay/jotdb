import { Button, Badge } from "@/components/ui";
import { cn, formatString } from "@/lib/utils";
import { useCategoriesStore } from "@/store";
import { useSelectedCategory } from "@/store/categoryActions-store";
import { useCategoryActions } from "@/store/categoryActions-store";

export default function List() {
  const categories = useCategoriesStore((state) => state.categories);

  const { setIsEditing, setIsDeleting, setSelectedCategory } =
    useCategoryActions();

  const selectedCategory = useSelectedCategory();

  const handleSelect = (id: string, name: string) => {
    setSelectedCategory({ id: id, name: name });
  };

  const isSelected = (name: string) => selectedCategory?.name === name;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories
          .filter((category) => category.name !== "Unsorted")
          .map((category) => (
            <Badge
              key={category.id}
              onClick={() => handleSelect(category.id, category.name)}
              className={cn(
                "p-3 text-sm cursor-pointer flex items-center border-2 gap-2",
                isSelected(category.name) && "border-green-500"
              )}
              variant="outline"
            >
              {isSelected(category.name) && (
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              )}
              {formatString(category.name)}
            </Badge>
          ))}
      </div>
      <div className="ml-auto space-x-3">
        <Button
          onClick={() => setIsEditing(true)}
          disabled={!selectedCategory}
          variant="outline"
        >
          Edit
        </Button>
        <Button
          onClick={() => setIsDeleting(true)}
          disabled={!selectedCategory}
          variant="destructive"
        >
          Delete
        </Button>
      </div>
    </>
  );
}
