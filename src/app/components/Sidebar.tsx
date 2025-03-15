"use client"
import { usePathname } from "next/navigation"
import React, { useMemo } from "react"
import { House, Search } from 'lucide-react';
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";



interface SidebarProps {
    children : React.ReactNode
}

const Sidebar : React.FC<SidebarProps> = ({children}) => {
  const pathName = usePathname()
  const routes = useMemo(() => [
    {
      icon : House,
      label : "Home",
      active : pathName !== '/search',
      href : "/"
    },
    {
      icon : Search,
      label : "Search",
      active : pathName === "/search",
      href : "/search"
    }
  ],[pathName])
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 border-b border-neutral-400/30 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item}/>
            ))}
          </div>
        </Box>
        <Box classname="overflow-y-auto h-full">
          <Library/>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-1">
        {children}
      </main>
    </div>
  )
}

export default Sidebar