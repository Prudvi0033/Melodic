"use client"

import { ChevronLeft, ChevronRight, House, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'

interface HeaderProps{
    children : React.ReactNode
    classname ?: string
}

const Header : React.FC<HeaderProps> = ({children, classname}) => {
    const router = useRouter()
    const handleLogout = () => {

    }
    return (
    <div className={`h-fit bg-gradient-to-b from-blue-800 p-6 ${classname}`}>
        <div className='w-full mb-4 flex items-center justify-between'>
            <div className='hidden md:flex gap-x-2 items-center'>
                <button onClick={() => router.back()} className='rounded-full cursor-pointer flex items-center justify-center hover:scale-105 transition p-1'><ChevronLeft className='text-neutral-400 hover:text-neutral-200' size={36} /></button>
                <button onClick={() => router.forward()} className='rounded-full cursor-pointer flex items-center justify-center hover:scale-105 transition p-1'><ChevronRight className='text-neutral-400 hover:text-neutral-200' size={36} /></button>
            </div>
            <div className='flex md:hidden gap-x-2 items-center'>
                <button className='bg-white text-black rounded-full p-2 flex justify-items-center hover:opacity-75 transition cursor-pointer'><House size={20} /></button>
                <button className='bg-white text-black rounded-full p-2 flex justify-items-center hover:opacity-75 transition cursor-pointer'><Search size={20} /></button>
            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <>
                    <div>
                        <Button
                        onClick={ () => {}}
                        className='bg-transparent text-neutral-300 font-medium'
                        >
                            Signup
                        </Button>
                    </div>
                    <div>
                        <Button
                        onClick={ () => {}}
                        className='bg-white px-6 py-2 font-medium'
                        >
                            Login
                        </Button>
                    </div>
                </>
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header