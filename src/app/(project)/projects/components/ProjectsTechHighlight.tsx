import React, { ReactNode } from 'react'

interface IProjectsTechHighlight {
  children: ReactNode
}

export const ProjectsTechHighlight = ({ children }: IProjectsTechHighlight) => {
  return (
    <strong className='text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text'>
      {children}
    </strong>
  )
}
