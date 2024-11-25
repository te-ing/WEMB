import { SidebarProvider, SidebarTrigger, Sidebar as Sidebar } from "@/components/ui/sidebar";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import React, { useState } from "react";
import EditInfo from "./EditInfo";

export default function RightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenChange = (e: boolean) => setIsOpen(e);
  return (
    <SidebarProvider className="w-fit" open={isOpen} onOpenChange={handleOpenChange} width="300px">
      <Sidebar
        variant="sidebar"
        side="right"
        collapsible="icon"
        className="overflow-hidden [&>[data-sidebar=sidebar]]:flex"
        {...props}
      >
        <SidebarMenu className="px-2 py-3 h-5">
          <SidebarTrigger className="-scale-x-100" />
        </SidebarMenu>
        {isOpen && (
          <SidebarContent className="p-2">
            <SidebarGroup>
              <SidebarGroupContent>
                <EditInfo />
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupContent>GROUP 2</SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        )}
      </Sidebar>
    </SidebarProvider>
  );
}
