'use client';

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSliderBtns } from '../MainSliderBtns';

interface IRecipeSliderProps {
  images: string[];
}

export const RecipeSlider = ({ images }: IRecipeSliderProps) => {
  return (
    <div className="relative rounded-md overflow-hidden group">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: '.nextButtonSlider',
          prevEl: '.prevButtonSlider',
        }}
        pagination={{
          clickable: true,
          el: `.swiper-pagination-recipe`,
          renderBullet: (_, className) => `<span class="${className} swiper-pagination-dot-circle"></span>`,
        }}
        speed={1000}
        grabCursor
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative size-full">
            <div className="relative w-full h-[700px] max-lg:h-[500px] max-md:h-[400px] max-sm:h-[350px]">
              <Image
                src={img}
                alt="Recipe image"
                width={1440}
                height={700}
                className="w-full h-full object-cover"
                priority={index === 0}
                fetchPriority="high"
              />
              <div className="absolute inset-0 z-2 shadow-customSlide"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-recipe swiper-pagination-circle-bullets " />
      {images.length > 1 && <MainSliderBtns />}
    </div>
  );
};
