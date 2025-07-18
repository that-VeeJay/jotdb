"use client";

import * as React from "react";
import { Plus } from "lucide-react";
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
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="flex items-center">
          <span className="bg-red-500 h-[6px] w-[6px] rounded-full"></span>
          <span>Academics</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select a category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Academics</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Entertainment
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Travel</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
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
