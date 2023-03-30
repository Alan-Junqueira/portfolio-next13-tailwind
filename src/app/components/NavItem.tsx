'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface INavIten extends LinkProps {
  text: string
}

export const NavIten = ({ text, ...props }: INavIten) => {
  const [isHovered, setIsHovered] = useState(false)

  const pathName = usePathname()

  const actualPage = props.href

  return (
    <Link
      {...props}
      className={`
      py-4 px-3
      transition-all ease-in duration-200 
      cursor-pointer 
      text-green-500 hover:text-green-300
      ${pathName === actualPage ? 'font-bold' : 'font-normal'}
      hover:font-normal
      relative
      before:content-[''] 
      ${pathName === actualPage ? 'before:w-full' : 'before:w-0'}
      before:h-0.5 
      before:absolute 
      before:bg-fuchsia-500
      before:bottom-0
      before:left-0
      before:right-0
      before:ease-in 
      before:duration-200
      `}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 ${
          isHovered && 'bg-fuchsia-700'
        }  content-[''] z-[-1] rounded h-4/6 mt-[9px] ease-in duration-300`}
      ></div>
      {text}
    </Link>
  )
}
