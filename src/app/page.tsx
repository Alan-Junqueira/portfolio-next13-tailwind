import Image from 'next/image'
import { ExampleComponent } from './components/TypeAnimation'
import { ButtonContact } from './components/ButtonContact'

export default function Home() {
  return (
    <main
      className="
        flex flex-col sm:grid sm:grid-cols-2
        justify-between items-center 
        gap-4 md:gap-6 lg:gap-8
        px-4 md:px-6 lg:px-8 py-10
        relative
        border-y-2 border-emerald-500
      "
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          alt=""
          src="/assets/images/home-particules.png"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className=" text-gray-200 text-xl mb-4">
          Seja bem vindo{' '}
          <i className="font-bold text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text ">
            !!!
          </i>
        </p>
        <h1 className="">
          <i className="text-lg">Sou</i>
          <strong className="text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-4xl">
            {' '}
            Alan Junqueira
          </strong>
        </h1>
        <h2 className="mb-4">
          <ExampleComponent />
        </h2>
        <p className="text-green-500 text-sm text-justify">
          Desenvolvedor Full Stack, focado em criar códigos limpos e de fácil
          manutenção, com atenção aos detalhes, visando uma melhor experiência
          para o usuário, página responsiva, código escalavel e funcional.
        </p>
        <ButtonContact
          className="
            flex gap-2 items-center 
            text-lg 
            mt-6 py-2 px-4 rounded-lg
            bg-fuchsia-700  hover:bg-gray-900
            text-green-300 hover:text-green-500
            border-2 border-green-300 hover:border-fuchsia-700
            transition-all ease-in duration-200 
          "
        />
      </div>
      <div className="relative h-60 overflow-hidden rounded-full flex items-center justify-center">
        <Image
          src="/assets/images/perfil.png"
          alt="Minha imagem de perfil"
          width={450}
          height={450}
          className="rounded-full w-fit h-full object-contain"
          priority
        />
      </div>
    </main>
  )
}
