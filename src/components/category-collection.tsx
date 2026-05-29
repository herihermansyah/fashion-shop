"use client";

import React from "react";
import {Card, CardContent, CardFooter} from "./ui/card";
import Typography from "./ui/typography";
import {productData} from "@/data/product-data";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import {Navigation} from "swiper/modules";

import {FaArrowRightLong} from "react-icons/fa6";
import {FaArrowLeftLong} from "react-icons/fa6";

function CategoryCollection() {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        className="w-wide"
      >
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="flex justify-center flex-col px-9 gap-8">
              <CardContent className="flex flex-col items-center justify-center">
                <div className="w-62.5 h-62.5 overflow-hidden rounded-2xl">
                  <Image
                    src={item.media?.mainImage ?? ""}
                    alt={item.title ?? ""}
                    width={250}
                    height={250}
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Typography variant="p" className="text-left text-[20px]">
                  {item.categories}
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-between text-Muted-Gray-200 absolute top-1/2 -translate-y-1/2 z-10 w-full  pointer-events-none">
        <span className="absolute -right-5 swiper-button-prev-custom cursor-pointer pointer-events-auto">
          <FaArrowRightLong size={18} />
        </span>
        <span className="absolute -left-5 swiper-button-next-custom cursor-pointer pointer-events-auto">
          <FaArrowLeftLong size={18} />
        </span>
      </div>
    </div>
  );
}

export default CategoryCollection;
