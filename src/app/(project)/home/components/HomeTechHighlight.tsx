import React, { ReactNode } from 'react'

interface IHomeTechHighlight {
  children: ReactNode
}

export const HomeTechHighlight = ({ children }: IHomeTechHighlight) => {
  return (
    <strong className='text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text'>
      {children}
    </strong>
  )
}
