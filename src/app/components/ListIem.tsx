'use client'
import { Play } from 'lucide-react'
import Image from 'next/image'
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
    <button onClick={handleClick} className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
        <div className='relative min-h-[64px] min-w-[64px]'>
            <Image className='object-cover' fill src={image} alt='Liked' />
        </div>
        <p className='text-lg font-medium truncate py-5'>{name}</p>
        <div className=' absolute transition opacity-0 flex justify-items-center rounded-full bg-blue-500 p-3 drop-shadow-md right-5 group-hover:opacity-110 hover:scale-110'>
            <Play className='text-white'/>
        </div>
    </button>
  )
}

export default ListIem