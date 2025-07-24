import { formatString } from "@/lib/utils";
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui";
import { useCategoriesStore } from "@/store";

export default function Selection() {
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
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}
