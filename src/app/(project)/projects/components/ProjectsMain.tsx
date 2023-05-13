import Image from 'next/image'

import { DevAnimation } from '@/components/DevAnimation'
import { LinkContact } from '@/components/LinkContact'
import { LinkDownloadCv }
  from '../../../../components/LinkDoneloadCv'
import { HTMLAttributes } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

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
          Seja bem vindo ao meu portfolio
          <i className="font-bold text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text ">
            !!!
          </i>
        </p>
        <h1 className="">
          <i className="text-lg">Sou</i>
          <strong className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-4xl">
            {' '}
            Alan Junqueira
          </strong>
        </h1>
        <h2 className="mb-4 h-5">
          <DevAnimation />
        </h2>
        <p className="text-green-500 text-sm text-justify mt-8">
          Desenvolvedor Full Stack, focado em criar códigos limpos e de fácil
          manutenção, com atenção aos detalhes, visando uma melhor experiência
          para o usuário, página responsiva, código escalável e funcional.
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
