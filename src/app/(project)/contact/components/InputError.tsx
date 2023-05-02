import React, { HTMLAttributes } from 'react'

interface IInputError extends HTMLAttributes<HTMLParagraphElement> {
  error: string
}

export const InputError = ({ error, ...props }: IInputError) => {
  return (
    <p {...props} className="text-sm text-red-500 font-sans">
      {error}
    </p>
  )
}
