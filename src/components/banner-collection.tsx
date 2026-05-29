"use client";

import React from "react";
import {Banner} from "./ui/banner";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";

interface BannerCollectionProps {
  children?: React.ReactNode;
  className?: string;
}

const BannerCollection = ({children, className}: BannerCollectionProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const hasMultipleData = React.Children.count(children) > 1;

  return (
    <Banner className={className}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={hasMultipleData}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {React.Children.map(children, (item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      {hasMultipleData && <PaginationSwiper isActive={activeIndex} />}
    </Banner>
  );
};

export default BannerCollection;

const PaginationSwiper = ({isActive}: {isActive: number}) => {
  return (
    <>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 mx-auto max-w-360 w-full flex justify-between px-4 pointer-events-none">
        <button className="swiper-button-prev-custom text-White-Smoke cursor-pointer pointer-events-auto">
          <IoIosArrowBack size={50} />
        </button>
        <button className="swiper-button-next-custom text-White-Smoke cursor-pointer pointer-events-auto">
          <IoIosArrowForward size={50} />
        </button>
      </div>

      <div className="absolute bottom-2 sm:bottom-12.5 left-1/2 -translate-x-1/2 z-10 flex items-center">
        <div
          className={`h-2 w-15.5 rounded-l-full transition-colors duration-300 ${
            isActive === 0 ? "bg-white" : "bg-white/50"
          }`}
        ></div>

        <div
          className={`h-2 w-15.5 rounded-r-full transition-colors duration-300 ${
            isActive === 1 ? "bg-white" : "bg-white/50"
          }`}
        ></div>
      </div>
    </>
  );
};
