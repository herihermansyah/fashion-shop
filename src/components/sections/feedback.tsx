"use client";

import React from "react";
import {Card, CardContent, CardFooter} from "../ui/card";
import avatar from "@/assets/product/man/man1.png";
import Image from "next/image";
import Typography from "../ui/typography";
import LineUp from "../ui/line-up";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Mousewheel} from "swiper/modules";

const customerReview = [
  {
    id: 1,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 2,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 3,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 4,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 5,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 6,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
  {
    id: 7,
    name: "floyd miles",
    rating: "⭐⭐⭐⭐⭐",
    avatar: avatar,
    message:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quam. Voluptatibus consequuntur, ipsam officia quae aliquam esse blanditiis odio. Laborum dolorem veritatis qui vitae! Adipisci dolorum delectus placeat ducimus perspiciatis?",
  },
];

function Feedback() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <section className="flex flex-col gap-17.5 relative">
      <LineUp>
        <Typography
          variant={"h4"}
          className="capitalize sm:text-[34px] font-bold"
        >
          Feedback
        </Typography>
      </LineUp>
      <Swiper
        slidesPerView={3}
        mousewheel={{forceToAxis: true}}
        modules={[Mousewheel]}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {customerReview.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="w-99 h-73 cursor-pointer flex flex-col gap-5 border-2 border-Muted-Gray rounded-[10px] p-6 overflow-hidden">
              <CardContent className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover aspect-square object-top"
                  />
                  <span>{item.rating}</span>
                </div>
                <Typography variant="h5">{item.name}</Typography>
              </CardContent>
              <CardFooter>
                <Typography
                  variant="p"
                  className="text-[14px] font-normal text-Muted-Gray-200"
                >
                  {item.message}
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-3 absolute -bottom-7 left-1/2 -translate-x-1/2">
        {customerReview.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-Charcoal" : "bg-Muted-Gray"} `}
          />
        ))}
      </div>
    </section>
  );
}

export default Feedback;
