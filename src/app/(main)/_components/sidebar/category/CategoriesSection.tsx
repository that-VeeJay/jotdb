import { Plus, Settings2 } from "lucide-react";

import { Button } from "@/components/ui";
import { getUserIdOrThrow } from "@/lib/data-access/user";
import { getCategories } from "@/lib/data-access/category";

import Selector from "./Selector";

export default async function CategoriesSection() {
  const userId = await getUserIdOrThrow();
  const categories = await getCategories(userId);

  return (
    <div className="flex gap-1">
      <Button variant="secondary" size="icon">
        <Settings2 />
      </Button>
      <Selector categories={categories} />
      <Button variant="secondary" size="icon">
        <Plus />
      </Button>
    </div>
  );
}
