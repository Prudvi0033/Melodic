import Link from 'next/link'
import React from 'react'

interface SidebarItemProps {
    icon : React.ElementType
    label : string
    active ?: boolean
    href : string
}

const SidebarItem : React.FC<SidebarItemProps> = ({
    icon : Icon,
    label,
    active,
    href
}) => {
  return (
    <Link href={href} className={`flex flex-row items-center h-auto w-full text-md font-medium gap-x-4 cursor-pointer text-neutral-400 hover:text-white transition py-1 ${active ? 'text-white' : ""}` }>
        <Icon size={25} />
        <p className=' truncate w-full'>{label}</p>
    </Link>
  )
}

export default SidebarItem