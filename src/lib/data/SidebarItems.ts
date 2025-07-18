import {
  Home,
  Book,
  FileText,
  Settings,
  Users,
  Folder,
  Star,
  Trash2,
} from "lucide-react";

export const sidebarItems = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra tellus turpis",
    url: "/",
    icon: Home,
  },
  {
    title: "Library",
    url: "/library",
    icon: Book,
  },
  {
    title: "My Notes",
    url: "/notes",
    icon: FileText,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: Star,
  },
  {
    title: "Folders",
    url: "/folders",
    icon: Folder,
  },
  {
    title: "Shared",
    url: "/shared",
    icon: Users,
  },
  {
    title: "Trash",
    url: "/trash",
    icon: Trash2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
