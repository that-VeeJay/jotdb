import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export default function Tags() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Tags</SidebarGroupLabel>
      <SidebarGroupContent>
        <p>List of tags</p>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
