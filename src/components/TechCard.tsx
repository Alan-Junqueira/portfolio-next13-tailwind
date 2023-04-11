import Link from 'next/link'
import { HTMLAttributes } from 'react'

import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import {
  DiCss3,
  DiJavascript,
  DiGit,
  DiNodejsSmall,
  DiSass,
} from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

interface ITechCard extends HTMLAttributes<HTMLDivElement> {
  mainColorBg: string
  mainColorBorder: string
  techName: string
  description: string
  techLabel: string
  iconColor: string
}

export const TechCard = ({
  mainColorBg,
  mainColorBorder,
  techName,
  description,
  techLabel,
  iconColor,
  ...props
}: ITechCard) => {
  const externalLinks: any = {
    html: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    css: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    javascript: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    git: 'https://git-scm.com/',
    reactjs: 'https://reactjs.org/',
    typescript: 'https://www.typescriptlang.org/',
    nextjs: 'https://nextjs.org/',
    nodejs: 'https://nodejs.org/en/',
    github: 'https://github.com/',
    sass: 'https://sass-lang.com/',
  }

  return (
    <div
      {...props}
      className={`
        w-full h-full 
        flex flex-col
        rounded-lg overflow-hidden
        border-[3px] border-solid
      `}
      style={{ borderColor: iconColor, backgroundColor: mainColorBg }}
    >
      <div className={`h-24 p-4`} style={{ backgroundColor: iconColor }}></div>

      {/* CardIconLogo */}
      <div className="flex items-center justify-center h-20">
        {/* IconLogo */}
        <div
          className={`
            bg-stone-50 rounded-full -mt-24
            border-2 border-solid
            flex items-center justify-center w-[90px] h-[90px]
          `}
          style={{
            borderColor: iconColor,
            boxShadow: `0px 0px 0px 1.5px white,
                        0px 0px 0px 4px ${iconColor}`,
          }}
        >
          {techLabel === 'html' && <AiFillHtml5 size={70} color={iconColor} />}
          {techLabel === 'css' && <DiCss3 size={70} color={iconColor} />}
          {techLabel === 'javascript' && (
            <DiJavascript size={70} color={iconColor} />
          )}
          {techLabel === 'git' && <DiGit size={70} color={iconColor} />}
          {techLabel === 'reactJs' && <GrReactjs size={70} color={iconColor} />}
          {techLabel === 'typescript' && (
            <SiTypescript size={50} color={iconColor} />
          )}
          {techLabel === 'nextJs' && (
            <TbBrandNextjs size={70} color={iconColor} />
          )}
          {techLabel === 'nodeJs' && (
            <DiNodejsSmall size={70} color={iconColor} />
          )}
          {techLabel === 'github' && (
            <AiFillGithub size={70} color={iconColor} />
          )}
          {techLabel === 'sass' && <DiSass size={70} color={iconColor} />}
        </div>
      </div>

      {/* Description Container */}
      <div className="px-4 pb-4 -mt-4 flex flex-col gap-4">
        <span className="self-center uppercase text-xl font-bold">
          {techName.toUpperCase()}
        </span>
        <p className="self-center text-sm text-center font-medium truncate-two">
          {description}
        </p>
        <Link
          className={`self-center rounded-2xl px-[5px] py-[10px] uppercase text-center font-bold text-sm text-stone-50 w-32`}
          href={externalLinks[`${techLabel.toLowerCase()}`]}
          target="_blank"
          style={{ backgroundColor: iconColor }}
        >
          Veja Mais
        </Link>
      </div>
    </div>
  )
}
