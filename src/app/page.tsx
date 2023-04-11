import { HomeCertificatesSlider } from '@/components/home/HomeCertificatesSlider'
import { HomeMain } from '@/components/home/HomeMain'
import { HomeTechSlider } from '@/components/home/HomeTechSlider'

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeTechSlider />
      <HomeCertificatesSlider />
    </>
  )
}
