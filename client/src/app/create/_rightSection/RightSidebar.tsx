import { SidebarProvider, SidebarTrigger, Sidebar as Sidebar } from "@/components/ui/sidebar";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import React from "react";

export default function RightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider className="w-fit">
      <Sidebar
        variant="sidebar"
        side="right"
        collapsible="icon"
        className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
        {...props}
      >
        <SidebarContent className="p-2">
          <SidebarTrigger className="-scale-x-100" />
          <SidebarGroup>
            <SidebarGroupContent>GROUP 1</SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>GROUP 2</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
