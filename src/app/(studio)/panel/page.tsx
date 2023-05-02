'use client'

import { Oauth } from '@/app/(auth)/login/components/Oauth'
import { auth } from '@/libs/firebase'
import Image from 'next/image'
import { FaBriefcase } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { GiTargetShot, GiFamilyHouse, GiSoapExperiment } from 'react-icons/gi'
import { MdLanguage } from 'react-icons/md'
import { BsBodyText } from 'react-icons/bs'
import { IoShareSocialOutline } from 'react-icons/io5'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function PanelPage() {
  const [user, loading] = useAuthState(auth)
  console.log(user)
  return (
    <>
      {loading ? (
        <span>Carregando</span>
      ) : user?.email === process.env.NEXT_PUBLIC_AUTHORIZED_EMAIL ? (
        <div className="relative">
          <aside
            className="
            fixed top-0 left-0 bottom-0 
            h-screen w-56 
            overflow-y-scroll"
          >
            <div className="flex justify-between items-center bg-neutral-100 px-2 py-2 border-b-4 border-b-emerald-500">
              <div className="w-10 h-10 relative">
                <Image
                  className="absolute"
                  alt="logo"
                  src="/assets/images/logo.svg"
                  fill
                />
              </div>
              <span className="text-2xl text-fuchsia-700 font-bold">
                Dashboard
              </span>
            </div>

            <ul className="flex flex-col ">
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <FaBriefcase size={24} /> Portfolio
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <TbCertificate size={24} /> Certificados
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <GiTargetShot size={24} /> Tech Stack
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <MdLanguage size={24} /> Idiomas
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <GiFamilyHouse size={24} /> Residencia
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <GiSoapExperiment size={24} /> Experiências
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <IoShareSocialOutline size={24} /> Social Links
              </li>
              <li
                className="
                  flex justify-between 
                  px-4 py-3
                  text-md
                  cursor-pointer
                  border-b border-b-green-600
                  hover:bg-purple
                  text-green-500 hover:text-green-400
                  hover:bg-fuchsia-900
                  hover:font-bold
                  "
              >
                <BsBodyText size={24} /> Texts
              </li>
            </ul>
          </aside>
          <div className="flex flex-col pl-56">
            <p>teste</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-screen justify-center">
          <Oauth />
        </div>
      )}
    </>
  )
}
