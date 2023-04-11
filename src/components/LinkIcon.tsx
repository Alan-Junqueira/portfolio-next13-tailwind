import Link, { LinkProps } from 'next/link'
import React, { ReactNode, HTMLAttributes } from 'react'

interface ILinkIcon extends HTMLAttributes<HTMLAnchorElement>, LinkProps {
  children: ReactNode
  target?: string
  navigate?: () => void
  iconLeft?: () => void
  iconRight?: () => void
}

export const LinkIcon = ({
  children,
  iconLeft,
  iconRight,
  target,
  ...props
}: ILinkIcon) => {
  return (
    <Link
      {...props}
      target={target}
      className="
        flex gap-2 items-center justify-center
        text-base
        mt-6 py-2 px-4 rounded-lg
        bg-fuchsia-700  hover:bg-gray-900
        text-green-300 hover:text-green-500
        border-2 border-green-300 hover:border-fuchsia-700
        transition-all ease-in duration-200 
        w-full truncate
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
