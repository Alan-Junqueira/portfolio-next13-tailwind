import Image from 'next/image'

import { HiHomeModern } from 'react-icons/hi2'
import { SlCalender } from 'react-icons/sl'

import dayjs from 'dayjs'

import { LinkDownloadCv }
  from '../../../../components/LinkDoneloadCv'

import { DevAnimation } from '@/components/DevAnimation'
import { LinkContact } from '@/components/LinkContact'
import { SocialsHeader } from '@/components/SocialsHeader'


export const HomeMain = () => {
  const birth: string = "1995-07-24"
  const now = dayjs()
  const age = now.diff(birth, 'year')

  return (
    <main
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
          Seja bem vindo{' '}
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
              <HiHomeModern size={20} />
              <strong
                className='text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text'>
                Caldas Novas - Go
              </strong>
            </span>
            <span className='flex items-center gap-2'>
              <SlCalender size={20} />
              <strong
                className='text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text'>
                {age} anos
              </strong>
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <LinkContact />
          <LinkDownloadCv />
        </div>
      </div>
      <div className="relative h-60 flex items-center justify-center mt-10 sm:mt-0 mb-10 sm:mb-0 order-1 sm:order-2">
        <div
          className="
            absolute -bottom-10 left-0 right-0
            sm:top-0 sm:right-0 sm:bottom-0 sm:left-auto
            w-full h-fit 
            sm:w-fit sm:h-full 
            bg-black bg-opacity-30
            px-2 py-1
            hidden sm:flex sm:flex-col items-center justify-center
          "
        >
          <SocialsHeader />
        </div>
        <Image
          src="/assets/images/perfil.png"
          alt="Minha imagem de perfil"
          width={200}
          height={200}
          className="rounded-full w-fit h-full object-contain bg-fuchsia-900 p-1"
          priority
          quality={100}
          draggable={false}
        />
      </div>
    </main>
  )
}
