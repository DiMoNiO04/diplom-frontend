'use client';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSliderBtns } from '../MainSliderBtns';

interface IRecipeSliderProps {
  images: string[];
}

export const RecipeSlider = ({ images }: IRecipeSliderProps) => {
  return (
    <div className="relative rounded-md overflow-hidden group">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: '.nextButtonSlider',
          prevEl: '.prevButtonSlider',
        }}
        speed={1000}
        grabCursor
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide className="relative size-full">
            <div className="relative w-full h-[700px]">
              <Image
                src={img}
                alt=""
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
      {images.length > 1 && <MainSliderBtns />}
    </div>
  );
};
