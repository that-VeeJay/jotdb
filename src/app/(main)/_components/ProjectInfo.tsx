import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Info, ExternalLink } from "lucide-react";
import { Star } from "lucide-react";

export function ProjectInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Info size={16} className="cursor-pointer hover:text-primary" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] backdrop-blur-xl bg-background/80">
        <DialogHeader>
          <DialogTitle>JOTDB</DialogTitle>
          <DialogDescription>
            A lightweight, fast, and open-source document repository built with
            ❤️
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 text-sm text-muted-foreground">
          <p>
            <strong>Version:</strong> 1.0.0
          </p>
          <p>
            <strong>Author:</strong> Vee Jay M. Omisol
          </p>
        </div>

        <div className="mt-4">
          <Button
            asChild
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <a
              href="https://github.com/that-VeeJay/jotdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give a <Star color="yellow" fill="yellow" /> on GitHub
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
