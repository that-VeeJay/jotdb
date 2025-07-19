"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useCategoriesStore } from "@/store";
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

export function Categories() {
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);
  const setActiveCategory = useCategoriesStore(
    (state) => state.setActiveCategory
  );

  const [currentCategory, setCurrentCategory] = useState("");

  // Fetch categories on initial render
  useEffect(() => {
    fetchCategories();
  }, []);

  // Set the first category as default and sync with global category store
  useEffect(() => {
    if (categories.length > 0 && currentCategory === "") {
      setCurrentCategory(categories[0].name);
    }

    if (currentCategory) {
      setActiveCategory(currentCategory);
    }
  }, [categories, currentCategory]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="flex items-center">
          <span className="bg-green-500 h-[6px] w-[6px] rounded-full"></span>
          <span>{currentCategory}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a category</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {categories.length === 0 ? (
          <p className="p-3 text-sm text-muted-foreground">
            No categories available. Click below to add your first one!
          </p>
        ) : (
          <DropdownMenuRadioGroup
            value={currentCategory}
            onValueChange={setCurrentCategory}
          >
            {categories.map((category) => (
              <DropdownMenuRadioItem key={category.id} value={category.name}>
                {category.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        )}

        <DropdownMenuSeparator />
        <Button className="w-full" variant="ghost">
          <DropdownMenuLabel className="flex items-center gap-1">
            <span>Add new category</span>
            <Plus />
          </DropdownMenuLabel>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
