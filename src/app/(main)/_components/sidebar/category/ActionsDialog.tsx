import {
  Separator,
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "@/components/ui";

export default function ActionsDialog() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Actions</DialogTitle>
        <DialogDescription>
          Manage this category by renaming or deleting it.
        </DialogDescription>
      </DialogHeader>
      <form action="" className="space-y-3">
        <div>
          <Label htmlFor="name-1" className="mb-2">
            Rename (category name)
          </Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="flex gap-2 justify-end">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </div>
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>
        <DialogDescription>
          Deleting this category will move all associated notes to "Unsorted".
        </DialogDescription>
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      </form>
    </DialogContent>
  );
}
