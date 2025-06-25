import { Pencil } from "lucide-react";
import {
  Button,
  ScrollArea,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export default function View() {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between">
            <span>Note Title</span>
            <Button size="icon" variant="outline">
              <Pencil />
            </Button>
          </div>
        </CardTitle>
        <CardDescription className="text-xs">June 26, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-8rem)] ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatum quos officiis nostrum numquam laboriosam
            molestiae voluptas nam quod ipsam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia dolorem sequi fugit repellat
            ab.
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
