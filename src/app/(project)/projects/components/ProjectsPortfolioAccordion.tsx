'use client'

import { GoChevronDown } from 'react-icons/go'

import * as Accordion from '@radix-ui/react-accordion'

interface IProjectsPortfolioAccordion {
  description: string
  triggerValue: string
}

export const ProjectsPortfolioAccordion = ({
  description,
  triggerValue,
}: IProjectsPortfolioAccordion) => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item
        value={triggerValue}
        className="
          border-b border-x border-fuchsia-700
          pt-2
          bg-neutral-200
          text-fuchsia-700
          rounded-b-lg overflow-hidden
        "
      >
        <Accordion.Trigger className="group flex items-center justify-between w-full px-4 font-bold pb-2">
          <span>Descrição</span>
          <GoChevronDown
            size={16}
            className="
              ease-in transition-transform duration-300 group-data-[state=open]:rotate-180 font-bold
            "
          />
        </Accordion.Trigger>
        <Accordion.Content
          className="
            data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden
            border-t border-t-emerald-500 bg-neutral-100
            py-2 px-4 
            text-justify text-sm font-sans
          "
        >
          {description}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
