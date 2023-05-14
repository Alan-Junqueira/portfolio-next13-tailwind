import React, { HTMLAttributes } from 'react'
import { BsGithub, BsGlobe } from 'react-icons/bs'

import { ProjectsCardLink } from './ProjectsCardLink'
import { ProjectsCardLinkDisabled } from './ProjectsCardLinkDisabled'

interface IProjectsCardLinks extends HTMLAttributes<HTMLDivElement> {
  githubLink: string
  siteLink: string
}

export const ProjectsCardLinks = ({ githubLink, siteLink, ...props }: IProjectsCardLinks) => {
  return (
    <div
      {...props}
      className="
      absolute z-10 inset-0
      flex items-center justify-center gap-4
      opacity-100 md:opacity-0 hover:opacity-100
      bg-black bg-opacity-50
      transition-all ease-in duration-200
    "
    >
      {githubLink === "#" || siteLink === "#" ? (
        <>
          <ProjectsCardLinkDisabled
            text='Github'
            icon={() => <BsGithub />}
          />
          <ProjectsCardLinkDisabled
            text='Site'
            icon={() => <BsGlobe />}
          />
        </>
      ) : (
        <>
          <ProjectsCardLink
            text='Github'
            icon={() => <BsGithub />}
            href={githubLink}
          />
          <ProjectsCardLink
            text='Site'
            icon={() => <BsGlobe />}
            href={siteLink}
          />
        </>
      )}
    </div>
  )
}
