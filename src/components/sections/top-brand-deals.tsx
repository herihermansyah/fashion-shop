import React from "react";
import Typography from "../ui/typography";

import nike from "@/assets/brand/nike.png";
import hm from "@/assets/brand/hm.png";
import levis from "@/assets/brand/levis.png";
import polo from "@/assets/brand/polo.png";
import puma from "@/assets/brand/puma.png";
import Image from "next/image";

const brands = [
  {logo: nike, widht: 149, height: 53},
  {logo: hm, widht: 122, height: 68},
  {logo: levis, widht: 111, height: 55},
  {logo: polo, widht: 148, height: 49},
  {logo: puma, widht: 112, height: 56},
];

function TopBrandDeals() {
  return (
    <section className="flex flex-col gap-16.75 rounded-xl bg-Charcoal py-20">
      <div className="flex flex-col items-center gap-15">
        <Typography
          variant={"h3"}
          className="sm:text-[50px] font-extrabold capitalize leading-0 text-White-Smoke"
        >
          Top brand deals
        </Typography>
        <Typography variant={"p"} className="sm:text-[22px] text-White-Smoke">
          Up To <span className="font-medium text-yellow-400">60%</span> off on
          brands
        </Typography>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {brands.map((item, index) => (
          <div
            key={index}
            className="w-44.25 h-21.25 rounded-xl flex items-center justify-center bg-white"
          >
            <Image
              src={item.logo}
              alt=""
              width={item.widht}
              height={item.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopBrandDeals;
