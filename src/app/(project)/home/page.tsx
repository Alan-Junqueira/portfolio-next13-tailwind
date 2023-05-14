import { HomeCertificates } from "./components/HomeCertificates";
import { HomeCertificatesSlider } from "./components/HomeCertificatesSlider";
import { HomeMain } from "./components/HomeMain";
import { HomeTechSlider } from "./components/HomeTechSlider";
import { HomeTechStack } from "./components/HomeTechStack";

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
