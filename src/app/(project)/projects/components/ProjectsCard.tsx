import React, { HTMLAttributes } from 'react'
import { ProjectsCardLinks } from './ProjectsCardLinks'
import { ProjectsCardTechs } from './ProjectsCardTechs'
import Image from 'next/image'
import { ProjectsPortfolioAccordion } from './ProjectsPortfolioAccordion'
import { TPortfolio } from '@/@types/Portfolio'
import dayjs from 'dayjs'

interface IProjectsCard extends HTMLAttributes<HTMLDivElement> {
  project: TPortfolio
}

export const ProjectsCard = ({ project, ...props }: IProjectsCard) => {
  return (
    <div {...props}>
      <div className="flex items-center justify-between">
        <h3 className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-2xl font-bold">
          {project.projectName}
        </h3>
        <div className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-sm font-bold">
          {dayjs(project.projectCreation).format('MM/YYYY')}
        </div>
      </div>
      <div className="relative rounded-t-lg overflow-hidden max-h-80">
        <Image
          src={project.imageUrl}
          alt={project.projectName}
          width={1080}
          height={720}
          className="w-full h-auto"
        />
        <ProjectsCardLinks
          githubLink={project.githubLink}
          siteLink={project.siteLink}
        />
        <ProjectsCardTechs
          techs={project.techs}
        />
      </div>
      <ProjectsPortfolioAccordion
        description={project.description}
        triggerValue={project.projectName}
      />
    </div>
  )
}
