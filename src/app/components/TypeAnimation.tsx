'use client'

import { TypeAnimation } from 'react-type-animation'

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Desenvolvedor Full-Stack',
        2000,
        'Desenvolvedor ReactJs',
        2000,
        'Desenvolvedor NodeJs',
        2000,

        () => {
          console.log('Sequence completed') // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="
        font-bold text-2xl 
        text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text 
        after:text-transparent after:bg-gradient-to-br after:from-purple-500 after:to-pink-500 after:bg-clip-text
        "
    />
  )
}
