import React, { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
},ref) => {
    return (
        <button 
        type={type} 
        className={`w-full rounded-full bg-blue-500 border border-transparent px-4 py-2 disabled:opacity-50 text-black font-bold hover:opacity-75 transition ${className}`}
        disabled = {disabled}
        ref = {ref}
        {...props}
        >
            {children}
        </button>
    )
})

export default Button