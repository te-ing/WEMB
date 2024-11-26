"use client";

import * as React from "react";
import { SquarePlus, SquarePen, SquareMousePointer, HomeIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

// This is sample data
const data = {
  navMain: [
    {
      title: "뒤로가기",
      url: "/",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "도형 생성",
      icon: SquarePlus,
      isActive: true,
      onClick: () => console.log("도형 생성"),
    },
    {
      title: "텍스트 생성",
      icon: SquarePen,
      isActive: false,
      onClick: () => console.log("텍스트 생성"),
    },
    {
      title: "버튼 생성",
      icon: SquareMousePointer,
      isActive: false,
      onClick: () => console.log("버튼 생성"),
    },
  ],
};

export function LeftSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row" {...props}>
        <Sidebar collapsible="none" className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent className="px-1.5 md:px-0">
                <SidebarMenu>
                  <SidebarTrigger />
                  {data.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        onClick={() => {
                          if (item.url) router.push(item.url);
                          if (item.onClick) item.onClick();
                          return;
                        }}
                        className="px-2.5 md:px-2"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <Sidebar collapsible="none" className="hidden flex-1 md:flex">
          <SidebarContent className="py-4">
            <SidebarGroup className="p-2">
              <SidebarGroupContent>GROUP 1</SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="p-2">
              <SidebarGroupContent>GROUP 2</SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </Sidebar>
    </SidebarProvider>
  );
}
