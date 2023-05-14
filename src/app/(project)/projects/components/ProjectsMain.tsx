import Image from 'next/image'

import { HTMLAttributes } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

import { ProjectsTechHighlight } from './ProjectsTechHighlight'

import { LinkContact } from '@/components/LinkContact'
import { LinkDownloadCv }
  from '@/components/LinkDoneloadCv'

interface IProjectsMain extends HTMLAttributes<HTMLElement> {
  totalProjects: number
}

export const ProjectsMain = ({ totalProjects, ...props }: IProjectsMain) => {
  return (
    <main
      {...props}
      className="
        flex flex-col sm:grid sm:grid-cols-2
        justify-between items-center 
        gap-4 md:gap-6 lg:gap-8
        px-4 md:px-6 lg:px-8 py-16
        relative
        border-y-2 border-emerald-500
        mb-6
      "
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/assets/images/home-particles.png"
          alt='particles background'
          fill
          quality={30}
        />
      </div>
      <div className="order-2 sm:order-1">
        <p className=" text-gray-200 text-xl mb-4">
          Seja bem vindo aos meus projetos
          <i className="font-bold text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text ">
            !!!
          </i>
        </p>
        <p className="text-green-500 text-sm text-justify mt-8">
          Você terá acesso a projetos pessoais, projetos desenvolvidos a partir do <ProjectsTechHighlight>Figma</ProjectsTechHighlight> , projetos de freelance e projetos que foram desenvolvidos acompanhando aulas de alguns cursos. As linguagens mais utilizadas são  <ProjectsTechHighlight>React Js</ProjectsTechHighlight>, <ProjectsTechHighlight>Next Js</ProjectsTechHighlight> e <ProjectsTechHighlight>Typescript</ProjectsTechHighlight>.
        </p>
        <div className='mt-2'>
          <div className='flex flex-col gap-1 text-sm'>
            <span className='flex items-center gap-2'>
              <AiOutlineFundProjectionScreen size={20} />
              <strong
                className='text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text'>
                {totalProjects} projetos
              </strong>
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <LinkContact />
          <LinkDownloadCv />
        </div>
      </div>
      <div className='relative flex items-center justify-center mt-10 sm:mt-0 mb-10 sm:mb-0'>
        <Image
          src="/assets/images/projects.svg"
          alt='Tech Stack'
          width={350}
          height={350}
          draggable={false}
        />
      </div>
    </main>
  )
}
