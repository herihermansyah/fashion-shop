import React from "react";
import BannerCollection from "../banner-collection";
import {bannerHero} from "@/data/banner.data";
import {BannerBackground, BannerContent} from "../ui/banner";
import Typography from "../ui/typography";
import Button from "../ui/button";

const BannerShop = () => {
  return (
    <section>
      <BannerCollection>
        {bannerHero.map((item) => (
          <BannerBackground
            key={item.id}
            className="h-179"
            src={item.image}
            alt={item.title}
            width={1200}
            height={716}
            loading="eager"
            imageClass="w-full h-full object-cover object-bottom-right"
          >
            <BannerContent>
              <div className="sm:w-109.75 flex flex-col gap-10 items-start">
                <Typography variant="h3" className="text-White-Smoke">
                  {item.title}
                </Typography>
                <Typography
                  variant="h4"
                  className="text-[78px] font-extrabold object-top text-White-Smoke leading-23.25"
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  variant="p"
                  className="text-[32px] font-medium text-White-Smoke"
                >
                  {item.description}
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
        ))}
      </BannerCollection>
    </section>
  );
};



export {BannerShop};
