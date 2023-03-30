import React, { HTMLAttributes, ReactNode } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  navigate?: () => void
  iconLeft?: () => void
  iconRight?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  children,
  iconLeft,
  iconRight,
  type,
  ...props
}: IButton) => {
  return (
    <button {...props} type={type}>
      <>
        {iconLeft && iconLeft()}
        {children}
        {iconRight && iconRight()}
      </>
    </button>
  )
}
