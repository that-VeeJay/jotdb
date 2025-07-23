"use client";

import { useEffect } from "react";
import { useCategoriesStore } from "@/store";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import List from "./List";
import Create from "./Create";
import { formatString } from "@/lib/utils";

export function Selector({ userId }: { userId: string }) {
  // Category global store
  const { categories, fetchCategories } = useCategoriesStore((state) => ({
    categories: state.categories,
    fetchCategories: state.fetchCategories,
  }));

  const { activeCategory, setActiveCategory } = useCategoriesStore((state) => ({
    activeCategory: state.activeCategory,
    setActiveCategory: state.setActiveCategory,
  }));

  // Fetch categories when the component is first rendered
  useEffect(() => {
    fetchCategories(userId);
  }, []);

  // Find the default "unsorted" category and set it as the activeCategory in the global state
  useEffect(() => {
    const defaultCategory = categories[0];
    if (defaultCategory) {
      setActiveCategory(defaultCategory);
    }
  }, [categories]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="flex items-center">
          <span className="bg-green-500 h-[6px] w-[6px] rounded-full"></span>
          <span>{formatString(activeCategory?.name ?? "")}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <List />
        <DropdownMenuSeparator />
        <Create />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
