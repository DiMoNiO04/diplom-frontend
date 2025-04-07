'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slidesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { MainSliderBtns } from '../blocks';

const STYLES = {
  slideTitle: 'text-6xl font-bold text-white max-w-[670px] max-lg:text-4xl max-md:text-3xl max-lg:max-w-full',
};

export const MainSlider = () => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="relative w-full h-[700px] group max-xl:h-[500px] max-lg:h-[375px]">
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
              <Link href={`${EUrls.RECIPES}/${slide.slug}`}>
                <div className="relative w-full h-[700px] max-xl:h-[500px] max-lg:h-[375px]">
                  <Image
                    src={slide.img}
                    alt=""
                    fill
                    className="object-cover"
                    priority={index === 0}
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 z-2 shadow-customSlide"></div>
                </div>
                <div
                  className={clsx(
                    'absolute max-w-[1140px]  mx-auto bottom-20 left-0 right-0 z-10 px-4',
                    'max-lg:max-w-full max-lg:bottom-12 max-md:bottom-8'
                  )}
                >
                  <div className="flex items-start justify-start gap-2 max-w-[700px] mb-1">
                    <img src="/icons/trendingUp.svg" alt="" width={20} height={20} />
                    <span className="text-white text-lg italic max-lg:text-base">{slide.description}</span>
                  </div>
                  {index === 0 ? (
                    <h1 className={STYLES.slideTitle}>{slide.title}</h1>
                  ) : (
                    <h2 className={STYLES.slideTitle}>{slide.title}</h2>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <MainSliderBtns />
      </div>
    </section>
  );
};
