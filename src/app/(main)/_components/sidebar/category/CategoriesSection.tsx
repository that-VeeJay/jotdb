import { Settings2 } from "lucide-react";

import { Button } from "@/components/ui";
import { getCategories } from "@/lib/data-access/category";
import { requireUser } from "@/lib/data-access/user";

import Selector from "./Selector";
import Create from "./Create";

export default async function CategoriesSection() {
  const userId = await requireUser();
  const categories = await getCategories(userId);

  return (
    <div className="flex gap-1">
      <Button variant="secondary" size="icon">
        <Settings2 />
      </Button>
      <Selector categories={categories} />
      <Create />
    </div>
  );
}
