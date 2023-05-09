import React, { HTMLAttributes } from 'react'

interface IProjectsCardTechs extends HTMLAttributes<HTMLDivElement> {
  techs: string[]
}

export const ProjectsCardTechs = ({ techs, ...props }: IProjectsCardTechs) => {
  return (
    <div
      {...props}
      className={`
        flex items-center justify-end gap-2 flex-wrap
        absolute bottom-0 left-0 right-0
        backdrop-saturate-blur bg-[#08070B] bg-opacity-30 md:bg-opacity-60
        px-6 py-2
        z-20
        border-y border-y-neutral-600
        ${props.className}
      `}
    >
      {techs.map((tech, index) => (
        <span
          key={tech + index}
          className="bg-fuchsia-700 text-xs font-bold rounded-lg text-neutral-50 px-2 py-1"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
