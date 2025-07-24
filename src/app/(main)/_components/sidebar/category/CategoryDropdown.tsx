"use client";

import { useEffect } from "react";

import { formatString } from "@/lib/utils";
import { useCategoriesStore } from "@/store";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";

import Selection from "./Selection";
import CreateModal from "./CreateModal";
import ActionsModal from "./ActionsModal";

export function CategoryDropdown({ userId }: { userId: string }) {
  // Category global store
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);
  const activeCategory = useCategoriesStore((state) => state.activeCategory);
  const setActiveCategory = useCategoriesStore(
    (state) => state.setActiveCategory
  );

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
        <div className="flex items-center justify-between">
          <DropdownMenuLabel>Select a category</DropdownMenuLabel>
          <ActionsModal />
        </div>
        <DropdownMenuSeparator />
        <Selection />
        <DropdownMenuSeparator />
        <CreateModal />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
