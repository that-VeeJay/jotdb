"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import type { Category } from "@/lib/types";
import { useCategoriesStore } from "@/store";
import { formatString } from "@/lib/utils";

export default function Selector({ categories }: { categories: Category[] }) {
  const activeCategory = useCategoriesStore((state) => state.activeCategory);
  const setActiveCategory = useCategoriesStore(
    (state) => state.setActiveCategory
  );

  const selectedCategoryId = activeCategory?.id ?? "";

  const handleCategoryChange = (id: string) => {
    const selected = categories.find((category) => category.id === id);
    if (selected) setActiveCategory(selected);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-full flex-1">
          {activeCategory?.name || "Select Category"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Selected a category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedCategoryId}
          onValueChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <DropdownMenuRadioItem key={category.id} value={category.id}>
              {formatString(category.name)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
