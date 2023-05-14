import Link, { LinkProps } from 'next/link'

import React, { HTMLAttributes } from 'react'

interface IProjectsCardLink
  extends HTMLAttributes<HTMLAnchorElement>, LinkProps {
  icon: () => void
  text: string
}

export const ProjectsCardLink = ({ icon, text, ...props }: IProjectsCardLink) => {
  return (
    <Link
      {...props}
      target="_blank"
      className={`
        flex items-center gap-2
        mb-7 md:mb-1
        py-1 px-3 
        cursor-pointer 
        rounded-md
        font-bold text-base
        hover:underline
        text-green-500 hover:text-green-300
        bg-gray-900 hover:bg-fuchsia-700
        transition-all ease-in duration-200 
        ${props.className}
      `}
    >
      <>
        {icon()}
        {text}
      </>
    </Link>
  )
}
