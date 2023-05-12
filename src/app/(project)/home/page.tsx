import { HomeCertificatesSlider } from '@/app/(project)/home/components/HomeCertificatesSlider'
import { HomeMain } from '@/app/(project)/home/components/HomeMain'
import { HomeTechSlider } from '@/app/(project)/home/components/HomeTechSlider'
import { HomeTechStack } from './components/HomeTechStack'
import { HomeCertificates } from './components/HomeCertificates'

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTechStack />
      <HomeTechSlider />
      <HomeCertificates />
      <HomeCertificatesSlider />
    </>
  )
}
