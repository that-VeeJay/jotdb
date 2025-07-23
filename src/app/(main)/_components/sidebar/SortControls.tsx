"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpNarrowWide,
  ArrowDownUp,
  ArrowDownNarrowWide,
} from "lucide-react";
import {
  Button,
  Toggle,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui";
import { useSortStore } from "@/store/sort-store";

export default function SortControls() {
  const setOrder = useSortStore((state) => state.setOrder);

  const [active, setActive] = useState<"default" | "asc" | "desc">("default");

  useEffect(() => {
    setOrder(active);
  }, [active]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle
            pressed={active === "default"}
            onPressedChange={() => setActive("default")}
            asChild
          >
            <Button variant="ghost" size="icon">
              <ArrowDownUp
                className={active === "default" ? "" : "text-muted-foreground"}
              />
            </Button>
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>Custom Sort</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle
            pressed={active === "asc"}
            onPressedChange={() => setActive("asc")}
            asChild
          >
            <Button variant="ghost" size="icon">
              <ArrowUpNarrowWide
                className={active === "asc" ? "" : "text-muted-foreground"}
              />
            </Button>
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>Ascending</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle
            pressed={active === "desc"}
            onPressedChange={() => setActive("desc")}
            asChild
          >
            <Button variant="ghost" size="icon">
              <ArrowDownNarrowWide
                className={active === "desc" ? "" : "text-muted-foreground"}
              />
            </Button>
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>Descending</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
