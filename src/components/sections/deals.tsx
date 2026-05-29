import React from "react";
import BannerCollection from "../banner-collection";
import {BannerBackground, BannerContent} from "../ui/banner";
import Typography from "../ui/typography";
import Button from "../ui/button";

import dealimageone from "@/assets/banner/deal-image-one.png";
import dealimagetwo from "@/assets/banner/deal-image-two.png";

const dataDealsBanner = [
  {
    id: 1,
    image: dealimageone,
    title: "Low Price",
    subtitle: "High Coziness",
    description: "upto 50% off",
  },
  {
    id: 2,
    image: dealimagetwo,
    title: "Beyoung Presents",
    subtitle: "breezy Summer Style",
    description: "upto 50% off",
  },
];

function Deals() {
  return (
    <section className="flex flex-wrap lg:flex-nowrap items-center gap-7.5">
      {dataDealsBanner.map((item) => (
        <BannerCollection
          className="rounded-xl h-89 shadow-medium"
          key={item.id}
        >
          <BannerBackground
            className="h-179"
            src={item.image}
            alt={item.title}
            width={605}
            height={356}
            loading="eager"
            imageClass="w-full h-[356px] object-cover object-top-right"
          >
            <BannerContent>
              <div className="sm:w-58.5 absolute top-10 left-10 flex flex-col gap-2 items-start">
                <Typography
                  variant="h3"
                  className="text-White-Smoke text-[18px] font-extrabold leading-7.5"
                >
                  {item.title}
                </Typography>
                <div className="flex flex-col gap-2.25 mt-6">
                  <Typography
                    variant="h4"
                    className="text-[34px] font-extrabold text-White-Smoke leading-11.25"
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-[16px] font-medium leading-6.25 text-White-Smoke"
                  >
                    {item.description}
                  </Typography>
                </div>
                <Button
                  variant={"v3"}
                  size={"small"}
                  className="text-White-Smoke font-bold px-0 py-1 mt-10.25"
                >
                  Explore Items
                </Button>
              </div>
            </BannerContent>
          </BannerBackground>
        </BannerCollection>
      ))}
    </section>
  );
}

export default Deals;
