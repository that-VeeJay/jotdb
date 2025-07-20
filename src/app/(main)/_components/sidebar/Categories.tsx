"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useCategoriesStore, useUserStore } from "@/store";
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
import { ClientRequest } from "http";

export function Categories() {
  // Get authenticated user and id
  const userId = useUserStore((state) => state.user?.id);

  // Get category data and functions from the global store
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);
  const setActiveCategory = useCategoriesStore(
    (state) => state.setActiveCategory
  );

  // Local state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "",
  });

  // Fetch categories when the component is first rendered
  useEffect(() => {
    if (userId) {
      fetchCategories(userId);
    }
  }, [userId]);

  // Set the default selected category and sync it with the global store
  useEffect(() => {
    const firstCategory = categories[0];

    if (firstCategory && selectedCategory.id === "") {
      setSelectedCategory({ id: firstCategory.id, name: firstCategory.name });
      setActiveCategory(firstCategory.id);
    }
  }, [categories, selectedCategory.id]);

  // Handle category change when the user selects a new one
  function handleCategoryChange(name: string) {
    const category = categories.find((cat) => cat.name === name);
    if (category) {
      setSelectedCategory({ id: category.id, name: category.name });
      setActiveCategory(category.id);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="flex items-center">
          <span className="bg-green-500 h-[6px] w-[6px] rounded-full"></span>
          <span>{selectedCategory.name}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a category</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {categories && (
          <DropdownMenuRadioGroup
            value={selectedCategory.name}
            onValueChange={handleCategoryChange}
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
