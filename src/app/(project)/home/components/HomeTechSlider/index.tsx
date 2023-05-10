'use client'

import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { TechCard } from '@/components/TechCard'

import aboutMe from '../../../../../jsons/about-me.json'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

export const HomeTechSlider = () => {
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
        Tech Stack
      </h2>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          // el: '.teste',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full w-full overflow-hidden pb-10"
      >
        {aboutMe.programmingLanguages.map((language) => (
          <SwiperSlide
            key={language.name}
            className="rounded-lg h-full bg-stone-50 mb-8 lg:max-w-[33.33%]"
          >
            <TechCard
              description={language.description}
              iconColor={language.mainColor}
              mainColorBg={`bg-techs-${language.label}`}
              mainColorBorder={`border-techs-${language.label}`}
              techName={language.name}
              techLabel={language.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
