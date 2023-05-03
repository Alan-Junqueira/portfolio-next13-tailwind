import React, { LiHTMLAttributes, ReactNode } from 'react'

interface IDashboardMenuItem extends LiHTMLAttributes<HTMLLIElement> {
  menuName: string
  icon: () => ReactNode
  isActive: boolean
}

export const DashboardMenuItem = ({
  menuName,
  icon,
  isActive,
  ...props
}: IDashboardMenuItem) => {
  return (
    <li
      {...props}
      className={`
        flex justify-between 
        px-4 py-3
        text-md
        cursor-pointer
        border border-green-600
        hover:bg-purple
        text-green-500 hover:text-green-400
        ${isActive && 'bg-fuchsia-900 font-bold'}
        hover:bg-fuchsia-950
        hover:font-bold
        ${props.className}
      `}
    >
      {icon()} {menuName}
    </li>
  )
}
