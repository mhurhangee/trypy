"use client"

import React from "react"
import Link from "next/link"
import {
    Info,
    Settings2,
    TerminalSquare,
    ChevronRight,
    Bot,
    BookOpen
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from "@/components/ui/sidebar"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible"

const items = [
    {
        title: "Basics",
        url: "#",
        icon: TerminalSquare,
        isActive: true,
        items: [
            {
                title: "Strings",
                url: "#",
            },
            {
                title: "Lists",
                url: "#",
            },
            {
                title: "etc",
                url: "#",
            },
        ],
    },
    {
        title: "Lists",
        url: "#",
        icon: Bot,
        items: [
            {
                title: "Genesis",
                url: "#",
            },
            {
                title: "Explorer",
                url: "#",
            },
            {
                title: "Quantum",
                url: "#",
            },
        ],
    },
    {
        title: "Dictionaries",
        url: "#",
        icon: BookOpen,
        items: [
            {
                title: "Introduction",
                url: "#",
            },
            {
                title: "Get Started",
                url: "#",
            },
            {
                title: "Tutorials",
                url: "#",
            },
            {
                title: "Changelog",
                url: "#",
            },
        ],
    },
    {
        title: "Tuples",
        url: "#",
        icon: Settings2,
        items: [
            {
                title: "General",
                url: "#",
            },
            {
                title: "Team",
                url: "#",
            },
            {
                title: "Billing",
                url: "#",
            },
            {
                title: "Limits",
                url: "#",
            },
        ],
    },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <TerminalSquare className="!size-5" />
                                <span className="text-base font-semibold">TryPy</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Exercises</SidebarGroupLabel>
                    <SidebarMenu>
                        {items.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <a href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link href='#'>
                                <Info className="!size-5" />
                                <span>About</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link href='#'>
                                <Settings2 className="!size-5" />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
