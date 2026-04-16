"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { CamperResponse } from "@/lib/api/campresApi";
import css from "./CarDetails.module.css";

export default function CarDetailsImages({ car }: { car: CamperResponse }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.galleryContainer}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {car.gallery.map((img, index) => (
          <SwiperSlide key={index}>
            <div className={css.originalWrapper}>
              <Image
                src={img.original}
                alt={car.name}
                fill
                sizes="638px"
                priority={index === 0}
                unoptimized
                className={css.imageFill}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={16}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {car.gallery.map((img, index) => (
          <SwiperSlide key={index} className={css.thumbSlide}>
            <div className={css.thumbWrapper}>
              <Image
                src={img.thumb}
                alt={`Thumb ${index}`}
                sizes="144px"
                loading="eager"
                fill
                className={css.imageFill}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
