import React from 'react'

interface boxProps {
    children : React.ReactNode
    classname ?: string
}

const Box : React.FC<boxProps> = ({children, classname}) => {
  return (
    <div className={`bg-black rounded-lg h-fit w-full ${classname}`}>{children}</div>
  )
}

export default Box