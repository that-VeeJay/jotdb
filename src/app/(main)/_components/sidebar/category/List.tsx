import { Button, Badge } from "@/components/ui";
import { formatString } from "@/lib/utils";
import { useCategoriesStore } from "@/store";

export default function List() {
  const categories = useCategoriesStore((state) => state.categories);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories
          .filter((category) => category.name !== "Unsorted")
          .map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className={
                "p-3 text-sm cursor-pointer flex items-center border-2 gap-2"
              }
            >
              {formatString(category.name)}
            </Badge>
          ))}
      </div>
      <div className="ml-auto space-x-3">
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </>
  );
}
