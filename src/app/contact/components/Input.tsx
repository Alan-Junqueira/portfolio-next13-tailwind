import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="
        border-2 border-solid border-fuchsia-700 rounded-md pl-4 outline-none focus:border-pink-500
        text-sm text-neutral-50
        bg-transparent
        py-2
      "
    />
  )
})

Input.displayName = 'Input'
