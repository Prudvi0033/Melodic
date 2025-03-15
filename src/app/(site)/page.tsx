import React from 'react'
import { Figtree } from 'next/font/google'

const fig = Figtree({subsets : ['latin']})

const page = () => {
  return (
    <div className={`${fig.className}`}>Hello Ji</div>
  )
}

export default page