import React, { ButtonHTMLAttributes } from 'react'

interface IProjectsCardLinkDisabled extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: () => void
  text: string
}

export const ProjectsCardLinkDisabled = ({ icon, text, ...props }: IProjectsCardLinkDisabled) => {
  return (
    <button
      {...props}
      className={`
        flex items-center gap-2
        mb-7 md:mb-1
        py-1 px-3 
        rounded-md
        font-bold text-base
        hover:underline
        text-green-500 hover:text-green-300
        bg-gray-900 hover:bg-fuchsia-700
        transition-all ease-in duration-200 
        cursor-not-allowed
        opacity-70
        ${props.className}
      `}
      disabled
    >
      <>
        {icon()}
        {text}
      </>
    </button>
  )
}
