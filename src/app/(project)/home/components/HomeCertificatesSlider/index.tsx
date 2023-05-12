'use client'

import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import aboutMe from '../../../../../jsons/about-me.json'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

export const HomeCertificatesSlider = () => {
  return (
    <section
      className="
        flex flex-col gap-4 md:gap-6 lg:gap-8 py-10"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full w-full overflow-hidden pb-10 flex items-center justify-center "
      >
        {aboutMe.certificates.map((certificate) => (
          <SwiperSlide
            key={certificate.name}
            className="rounded-lg bg-stone-50 mb-8 lg:max-w-[50%]"
          >
            <Image
              alt={certificate.alt}
              src={certificate.banner}
              width={720}
              height={480}
              className="lg:max-h-96"
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
