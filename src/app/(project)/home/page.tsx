import { HomeCertificatesSlider } from '@/app/(project)/home/components/HomeCertificatesSlider'
import { HomeMain } from '@/app/(project)/home/components/HomeMain'
import { HomeTechSlider } from '@/app/(project)/home/components/HomeTechSlider'
import { HomeTechStack } from './components/HomeTechStack'
import { HomeTitle } from './components/HomeTitle'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTechStack />
      <HomeTechSlider />
      <HomeTitle title='Certificados' />
      <div
        className='
          flex flex-col md:grid md:grid-cols-2
          items-center
          gap-4 lg:gap-8
          px-6
        '
      >
        <div className="order-2 md:order-1">
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
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
      <HomeCertificatesSlider />
    </>
  )
}
