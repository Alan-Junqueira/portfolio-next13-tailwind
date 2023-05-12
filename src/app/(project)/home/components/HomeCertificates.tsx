import Image from 'next/image'
import { HomeTitle } from './HomeTitle'


export const HomeCertificates = () => {
  return (
    <div className='flex flex-col gap-6 pb-10'>
      <HomeTitle title='Certificados' />
      <div
        className='
          flex flex-col md:grid md:grid-cols-2
          items-center
          gap-4 lg:gap-8
          px-6
        '
      >
        <div className="order-2 md:order-1 flex flex-col items-center gap-4 text-justify">
          <p>
            Se certificar é ter o compromisso em adquirir habilidades e conhecimento em um campo em constante evolução.
          </p>
          <p>
            Ter esses certificados, é a forma que encontrei, de me destacar nesse mercado de trabalho, que é altamente competitivo.
          </p>
          <p>
            Eles demonstram minha experiência e dedicação em áreas específicas, e minha disposição para se manter atualizado, e atento às mudanças de mercado, e me manter relevante no mercado de tecnologia.
          </p>
        </div>
        <div className='relative flex items-center justify-center mt-10 sm:mt-0 mb-10 sm:mb-0 order-1 md:order-2'>
          <Image
            src="/assets/images/certificate.svg"
            alt='Certificados'
            width={350}
            height={350}
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
