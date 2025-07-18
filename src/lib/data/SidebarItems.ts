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
    id: 1,
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "Library",
    url: "/library",
    icon: Book,
  },
  {
    id: 3,
    title: "My Notes",
    url: "/notes",
    icon: FileText,
  },
  {
    id: 4,
    title: "Favorites",
    url: "/favorites",
    icon: Star,
  },
  {
    id: 5,
    title: "Folders",
    url: "/folders",
    icon: Folder,
  },
  {
    id: 6,
    title: "Shared",
    url: "/shared",
    icon: Users,
  },
  {
    id: 7,
    title: "Trash",
    url: "/trash",
    icon: Trash2,
  },
  {
    id: 8,
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
