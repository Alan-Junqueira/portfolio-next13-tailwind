import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

interface IInputRef extends InputHTMLAttributes<HTMLInputElement> {
  icon?: () => ReactNode
}

export const InputRef = forwardRef<HTMLInputElement, IInputRef>(
  ({ icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <label
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            htmlFor={props.id}
          >
            {icon()}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          className={`
            text-sm font-sans
            rounded-lg
            border-2 border-purple-500 
            ${icon ? 'pl-10' : 'pl-4'}
            pr-4 py-2
            focus:outline-none focus:border-purple-800
            hover:border-purple-700
            transition duration-200 ease-in
            bg-white
            w-full
            ${props.className}
          `}
        />
      </div>
    )
  },
)

InputRef.displayName = 'InputRef'
