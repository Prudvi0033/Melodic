import { useRouter } from 'next/navigation'
import React from 'react'

interface ListIemProps {
    image : string
    name : string,
    href : string
}

const ListIem = ({image, name, href} : ListIemProps) => {

    const router = useRouter()
    const handleClick = () => {
        //add auth
        router.push(href)
    }
  return (
    <button className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
        <div>
            
        </div>
    </button>
  )
}

export default ListIem