import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Fundamentals",
      url: "/app/dashboard/",
      items: [
        {
          title: "kalkulator belanja",
          url: "/dashboard/kalkulatorbelanja",
        },
        {
          title: "transformasi",
          url: "/dashboard/transformation",
        },
        {
          title: "Input validation",
          url: "/dashboard/inputvalidation",
        },
        {
          title: "Dekomposisi",
          url: "/dashboard/dekomposisi",
        },
        {
          title: "Contact Page",
          url: "/dashboard/contactpage",
        },
      ],
    },
    {
      title: "Fetch Api Data",
      url: "#",
      items: [
        {
          title: "Movies App",
          url: "/dashboard/movies",
        },
        
        {
          title: "Product Page",
          url: "/dashboard/productpage",
        },
        {
          title: "artikel",
          url: "/dashboard/artikel",
        },
        {
          title: "usestate",
          url: "/dashboard/usestate",
        },
        
        
      ],
    },
    {
      title: "Zustand State Management",
      url: "#",
      items: [
        {
          title: "zustand",
          url: "/dashboard/zustand",
        },
        {
          title: "checkout",
          url: "/dashboard/checkout",
        },
        {
          title: "shop",
          url: "/dashboard/shop",
        },
        {
          title: "productpage",
          url: "/dashboard/product",
        },
        
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
