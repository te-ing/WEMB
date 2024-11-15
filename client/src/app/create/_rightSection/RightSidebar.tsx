import { SidebarProvider, SidebarTrigger, Sidebar as Sidebar } from "@/components/ui/sidebar";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import React from "react";
import EditBackground from "./EditBackground";

export default function RightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <SidebarProvider className="w-fit">
      <Sidebar
        variant="sidebar"
        side="right"
        collapsible="icon"
        className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row w-[300px]"
        {...props}
      >
        <SidebarContent className="p-2">
          <SidebarTrigger className="-scale-x-100" />
          <SidebarGroup>
            <SidebarGroupContent>
              <EditBackground />
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>GROUP 2</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
