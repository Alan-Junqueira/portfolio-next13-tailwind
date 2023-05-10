import { HomeCertificatesSlider } from '@/app/(project)/home/components/HomeCertificatesSlider'
import { HomeMain } from '@/app/(project)/home/components/HomeMain'
import { HomeTechSlider } from '@/app/(project)/home/components/HomeTechSlider'

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTechSlider />
      <HomeCertificatesSlider />
    </>
  )
}
