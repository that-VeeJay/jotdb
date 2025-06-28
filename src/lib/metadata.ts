import { type Metadata } from "next";

export const siteMetadata = {
  baseTitle: "JOTDB",
  baseDescription:
    "JOTDB is a simple and powerful document editor designed for capturing, organizing, and syncing notes in real time.",
};

export const pageMetadata: Record<string, Metadata> = {
  login: {
    title: `Login | ${siteMetadata.baseTitle}`,
    description: "Access your JOTDB account to manage and organize your notes.",
  },
  register: {
    title: `Register | ${siteMetadata.baseTitle}`,
    description:
      "Create a new JOTDB account to start writing and organizing your notes.",
  },
  notFound: {
    title: "404 - Page Not Found",
    description: "Sorry, the page you're looking for does not exist.",
  },
};
