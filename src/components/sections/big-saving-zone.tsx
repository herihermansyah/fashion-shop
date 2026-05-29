import React from "react";
import LineUp from "../ui/line-up";
import Typography from "../ui/typography";

import dealimageone from "@/assets/banner/deal-image-one.png";
import dealimagetwo from "@/assets/banner/deal-image-two.png";
import BannerCollection from "../banner-collection";
import {BannerBackground, BannerContent} from "../ui/banner";
import Button from "../ui/button";
import wemade from "@/assets/banner/wemade.png";

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
  {
    id: 3,
    image: dealimagetwo,
    title: "Beyoung Presents",
    subtitle: "breezy Summer Style",
    description: "upto 50% off",
  },
  {
    id: 4,
    image: dealimagetwo,
    title: "Beyoung Presents",
    subtitle: "breezy Summer Style",
    description: "upto 50% off",
  },
  {
    id: 5,
    image: dealimageone,
    title: "Low Price",
    subtitle: "High Coziness",
    description: "upto 50% off",
  },
];

function BigSavingZone() {
  return (
    <section className="flex flex-col gap-17.5">
      <LineUp>
        <Typography variant={"h4"} className="capitalize text-[34px] font-bold">
          big saving zone
        </Typography>
      </LineUp>
      <div className="flex flex-col gap-25">
        <div className="grid grid-cols-6 gap-5">
          {dataDealsBanner.map((item, index) => (
            <BannerCollection
              className={`rounded-xl h-89 shadow-medium ${index <= 2 ? "col-span-2" : "col-span-3"}`}
              key={item.id}
            >
              <BannerBackground
                className="h-179"
                src={item.image}
                alt={item.title}
                width={605}
                height={393}
                loading="eager"
                imageClass="w-full h-[393px] object-cover object-top-right"
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
        </div>
        <BannerCollection>
          <BannerBackground
            className="h-160"
            src={wemade}
            alt="we made "
            width={1200}
            height={640}
            loading="eager"
            imageClass="w-full h-full rounded-xl"
          >
            <BannerContent>
              <div className="sm:w-109.75 absolute left-0 flex flex-col gap-7 items-start">
                <Typography
                  variant="h4"
                  className="text-[34px] uppercase font-extrabold text-White-Smoke leading-11.25"
                >
                  we made your everyday fashion better!
                </Typography>
                <Typography
                  variant="p"
                  className="text-[16px] font-medium leading-6.25 text-White-Smoke"
                >
                  in our journey to improve everyday fashion euphoria Presents
                  EVERYDAY wear range - comfortable & affordable fashion 24/7
                </Typography>
                <Button
                  variant={"v4"}
                  size={"small"}
                  className="px-10 text-Charcoal font-bold"
                >
                  Shop now
                </Button>
              </div>
            </BannerContent>
          </BannerBackground>
        </BannerCollection>
      </div>
    </section>
  );
}

export default BigSavingZone;
