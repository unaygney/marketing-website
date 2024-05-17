"use client";
import { BRANDS } from "../constant";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function BrandSlider() {
  return (
    <div aria-labelledby="Slider Container" className="h-full w-full">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          1440: {
            slidesPerView: 6,
            spaceBetween: 140,
          },
          720: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        {BRANDS.map((brand) => (
          <SwiperSlide key={brand.id}>
            <Image
              src={brand.logo}
              alt={brand.name}
              width={170}
              height={48}
              className="mx-auto object-cover xl:mx-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
