/* eslint-disable prettier/prettier */
'use client'

import { useBurgerMenuStore } from '@/store/burgerStore'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenu, BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FiBriefcase } from 'react-icons/fi'
import { RiContactsLine } from 'react-icons/ri'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const MenuBurger = () => {
  const {
    state: { isMenuBurgerOpen },
    actions: { toggleMenuBurger },
  } = useBurgerMenuStore()

  const pathName = usePathname()

  useEffect(() => {
    const body = document.querySelector('body')
    if (!body) return
    if (!isMenuBurgerOpen) {
      body.style.overflow = 'auto'
      return
    }

    body.style.overflow = 'hidden'


  }, [isMenuBurgerOpen])

  return (
    <nav
      className={`
        absolute inset-0 
        w-full
        flex sm:hidden flex-col
        ${isMenuBurgerOpen ? 'h-fit' : 'w-full h-20 px-4 py-6 '}
        `}
    >
      {isMenuBurgerOpen ? (
        <div className="flex flex-col h-screen bg-gray-900 py-6">
          <div className="w-10 h-10 absolute top-5 left-5">
            <Image
              className="absolute"
              alt="logo"
              src="/assets/images/logo.svg"
              fill
            />
          </div>
          <div className="flex items-end justify-end pb-6 px-4 border-b-2 border-b-emerald-500">
            <button className="self-end " onClick={toggleMenuBurger}>
              <BiMenuAltRight size={32} className="text-fuchsia-700" />
            </button>
          </div>
          <div className="flex flex-col">
            <Link
            onClick={toggleMenuBurger}
              href="/"
              className={`
                flex justify-between 
                px-6 py-4 
                border-b border-b-green-500  
                ${pathName === '/'
                  ? 'font-extrabold text-green-400'
                  : 'font-normal'
                }`}
            >
              <AiOutlineHome size={28} />
              Início
            </Link>
            <Link
            onClick={toggleMenuBurger}
              href="/projects"
              className={`
                flex justify-between 
                px-6 py-4 
                border-b border-b-green-500  
                ${pathName === '/projects'
                  ? 'font-extrabold text-green-400'
                  : 'font-normal'
                }`}
            >
              <FiBriefcase size={28} />
              Projetos
            </Link>
            <Link
            onClick={toggleMenuBurger}
              href="/contact"
              className={`
                flex justify-between 
                px-6 py-4 
                border-b border-b-green-500  
                ${pathName === '/contact'
                  ? 'font-extrabold text-green-400'
                  : 'font-normal'
                }`}
            >
              <RiContactsLine size={28} />
              Contato
            </Link>
          </div>
        </div>
      ) : (
        <>
          <button className="self-end" onClick={toggleMenuBurger}>
            <BiMenu size={32} className="text-fuchsia-700" />
          </button>
        </>
      )}
    </nav>
  )
}
