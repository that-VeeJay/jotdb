"use client";
import { Star, Heart, SquareArrowOutUpRight } from "lucide-react";

import {
  Button,
  DropdownMenuItem,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

export default function ProjectInformation() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Project Information
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>JOTDB</DialogTitle>
          <DialogDescription asChild>
            <div>
              <p>
                A lightweight and minimal note-taking application built for
                speed and simplicity.
              </p>
              <div className="flex items-center gap-1 mt-5">
                Made with <Heart size={15} color="red" fill="red" /> by Vee Jay
                Omisol
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" className="w-full" asChild>
            <a
              href="https://github.com/that-VeeJay/jotdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give a <Star color="yellow" fill="yellow" /> on GitHub{" "}
              <SquareArrowOutUpRight />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
