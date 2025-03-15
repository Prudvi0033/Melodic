import { LibraryBig, Plus } from 'lucide-react'
import React from 'react'


const Library = () => {

    const handleUpload = () => {
        //handle upload
    }
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <LibraryBig className='text-neutral-400' size={25} />
                <p className='text-neutral-400 font-medium'>Your Library</p>
            </div>
            <Plus onClick={handleUpload} size={18} className='mt-1 text-neutral-400 hover:text-white cursor-pointer transition' />
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            List of Songs!!
        </div>
    </div>
  )
}

export default Library