import React, { HTMLAttributes } from 'react'

interface IHomeTitle extends HTMLAttributes<HTMLHeadingElement> {
  title: string
}

export const HomeTitle = ({ title, ...props }: IHomeTitle) => {
  return (
    <h2
      {...props}
      className="
      text-center
      text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-4xl font-bold
      "
    >
      {title}
    </h2>
  )
}
