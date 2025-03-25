'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slidesData } from '@/data';

import { MainSliderBtns } from '../blocks';

const STYLES = {
  slideTitle: 'text-7xl font-bold text-white max-w-[670px]',
};

export const MainSlider = () => {
  return (
    <section className="mb-20">
      <div className="relative w-full h-[700px]">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: '.nextButtonSlider',
            prevEl: '.prevButtonSlider',
          }}
          speed={1000}
          autoplay={{ delay: 5000 }}
          grabCursor
          loop
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide className="relative size-full">
              <div className="relative w-full h-[700px]">
                <Image src={slide.img} alt="" width={1440} height={634} className="w-full h-full object-cover" />
                <div className="absolute inset-0 z-2 shadow-customSlide"></div>
              </div>
              <div className="absolute max-w-[1140px] py-10 mx-auto bottom-12 left-0 right-0 z-10">
                <div className="flex items-start justify-start gap-2 max-w-[700px] mb-1">
                  <Image src={'/icons/trendingUp.svg'} alt="Trending Up" width={20} height={20} />
                  <span className="font-onest text-white text-lg">{slide.description}</span>
                </div>
                {index === 0 ? (
                  <h1 className={STYLES.slideTitle}>{slide.title}</h1>
                ) : (
                  <h2 className={STYLES.slideTitle}>{slide.title}</h2>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <MainSliderBtns />
      </div>
    </section>
  );
};
