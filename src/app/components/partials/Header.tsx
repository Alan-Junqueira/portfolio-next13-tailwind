import Image from 'next/image'
import React from 'react'
import { NavIten } from '../NavItem'

export const Header = () => {
  return (
    <header
      className="
        flex justify-end md:justify-center items-center
        fixed inset-x-0 t-0
        w-full h-20 px-4 py-6 
        backdrop-saturate-blur bg-[#08070B] bg-opacity-60 z-10"
    >
      <div className="w-10 h-10 absolute top-1/2 left-5 transform -translate-y-1/2">
        <Image
          className="absolute"
          alt="logo"
          src="/assets/images/logo.svg"
          fill
        />
      </div>

      <nav className="hidden sm:flex items-center gap-6">
        <NavIten text="Início" href={'/'} />
        <NavIten text="Projetos" href={'/projects'} />
        <NavIten text="Contato" href={'/contact'} />
      </nav>
    </header>
  )
}
