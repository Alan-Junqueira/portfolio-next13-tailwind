import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface ILinkIcon extends LinkProps {
  children: ReactNode
  navigate?: () => void
  iconLeft?: () => void
  iconRight?: () => void
}

export const LinkIcon = ({
  children,
  iconLeft,
  iconRight,
  ...props
}: ILinkIcon) => {
  return (
    <Link
      {...props}
      className="
    flex gap-2 items-center 
    text-lg 
    mt-6 py-2 px-4 rounded-lg
    bg-fuchsia-700  hover:bg-gray-900
    text-green-300 hover:text-green-500
    border-2 border-green-300 hover:border-fuchsia-700
    transition-all ease-in duration-200 
    "
    >
      <>
        {iconLeft && iconLeft()}
        {children}
        {iconRight && iconRight()}
      </>
    </Link>
  )
}
