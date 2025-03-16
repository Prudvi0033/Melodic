import React from 'react'
import { Figtree } from 'next/font/google'
import Header from '../components/Header'
import ListIem from '../components/ListIem'

const fig = Figtree({ subsets: ['latin'] })

const page = () => {
  return (
    <div className={`${fig.className} bg-neutral-900/50 rounded-lg w-full h-full overflow-hidden overflow-y-auto`}>
      <Header>
        <div className='mb-2'>
          <h1 className='text-white text-3xl font-semibold'>Welcome back!</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
            <ListIem image='/liked.png' name='Liked Songs' href='liked' />
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-items-center'>
          <h1 className='text-white font-medium text-2xl'>Newest Songs</h1>
        </div>
        <div>
          List of Songs!
        </div>
      </div>
    </div>
  )
}

export default page