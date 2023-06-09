'use client'

import Image from 'next/image'

import { useAuthState } from 'react-firebase-hooks/auth'
import { BsBodyText } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa'
import { GiTargetShot, GiFamilyHouse, GiSoapExperiment } from 'react-icons/gi'
import { IoShareSocialOutline } from 'react-icons/io5'
import { MdLanguage } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'

import { Oauth } from '@/app/(auth)/login/components/Oauth'

import { DashboardMenuItem } from './components/DashboardMenuItem'
import { PortfolioConfig } from './components/PortfolioConfig'

import { auth } from '@/libs/firebase'

import { useDashboardStore } from '@/store/dashboardStore'

export default function PanelPage() {
  const [user, loading] = useAuthState(auth)
  const {
    state: { openedMenu },
    actions: { changeOpenedMenu },
  } = useDashboardStore()
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
            overflow-y-scroll z-10"
          >
            <div
              className="
                flex justify-between items-center 
                bg-neutral-100 
                px-2 py-2 
                border-4 border-emerald-500 
              "
            >
              <div className="w-10 h-10 relative ">
                <Image
                  className="absolute"
                  alt="logo"
                  src="/assets/images/logo.svg"
                  fill
                />
              </div>
              <span className="text-2xl text-fuchsia-700 font-bold ">
                Dashboard
              </span>
            </div>

            <ul className="flex flex-col ">
              <DashboardMenuItem
                icon={() => <FaBriefcase size={24} />}
                isActive={openedMenu === 'portfolio'}
                menuName="Portfolio"
                onClick={() => changeOpenedMenu('portfolio')}
              />
              <DashboardMenuItem
                icon={() => <TbCertificate size={24} />}
                menuName="Certificados"
                onClick={() => changeOpenedMenu('certificate')}
                isActive={openedMenu === 'certificate'}
              />
              <DashboardMenuItem
                icon={() => <GiTargetShot size={24} />}
                menuName="Tech Stack"
                onClick={() => changeOpenedMenu('techStack')}
                isActive={openedMenu === 'techStack'}
              />
              <DashboardMenuItem
                icon={() => <MdLanguage size={24} />}
                menuName="Idiomas"
                onClick={() => changeOpenedMenu('idioms')}
                isActive={openedMenu === 'idioms'}
              />
              <DashboardMenuItem
                icon={() => <GiFamilyHouse size={24} />}
                menuName="Residencia"
                onClick={() => changeOpenedMenu('residence')}
                isActive={openedMenu === 'residence'}
              />
              <DashboardMenuItem
                icon={() => <GiSoapExperiment size={24} />}
                menuName="Experiências"
                onClick={() => changeOpenedMenu('experience')}
                isActive={openedMenu === 'experience'}
              />
              <DashboardMenuItem
                icon={() => <IoShareSocialOutline size={24} />}
                menuName="Social Links"
                onClick={() => changeOpenedMenu('social')}
                isActive={openedMenu === 'social'}
              />
              <DashboardMenuItem
                icon={() => <BsBodyText size={24} />}
                menuName="Texts"
                onClick={() => changeOpenedMenu('texts')}
                isActive={openedMenu === 'texts'}
              />
            </ul>
          </aside>
          <div className="flex flex-col ml-56 pb-8 bg-neutral-100 min-h-screen">
            {openedMenu === 'portfolio' && <PortfolioConfig />}
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
