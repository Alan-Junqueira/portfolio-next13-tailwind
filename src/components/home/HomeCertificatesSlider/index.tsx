'use client'

import aboutMe from '../../../jsons/about-me.json'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

import './styles.css'
import Image from 'next/image'

export const HomeCertificatesSlider = () => {
  return (
    <section
      className="
        flex flex-col gap-4 md:gap-6 lg:gap-8 py-10"
    >
      <h2
        className="
          px-4 md:px-6 lg:px-8
          text-center
          text-transparent bg-gradient-to-br from-fuchsia-700 to-pink-500 bg-clip-text text-4xl font-bold
          mb-10
          "
      >
        Certificados
      </h2>
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
        className="mySwiper h-full w-full overflow-hidden pb-10 flex items-center justify-center"
      >
        {aboutMe.certificates.map((certificate) => (
          <SwiperSlide
            key={certificate.name}
            className="rounded-lg bg-stone-50"
          >
            <Image
              alt={certificate.alt}
              src={certificate.banner}
              width={1080}
              height={650}
              className="lg:max-h-96"
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
