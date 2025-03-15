import React from 'react'
import { Figtree } from 'next/font/google'

const fig = Figtree({subsets : ['latin']})

const page = () => {
  return (
    <div className={`${fig.className} bg-neutral-900/50 rounded-lg w-full h-full overflow-hidden overflow-y-auto`}>
      
    </div>
  )
}

export default page