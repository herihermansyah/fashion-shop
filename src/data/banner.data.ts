import {StaticImageData} from "next/image";
import bannerOne from "../assets/banner/banner-one.svg";
import bannerTwo from "../assets/banner/banner-two.jpg";

interface BannerType {
  id: number;
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
}

export const bannerHero: BannerType[] = [
  {
    id: 1,
    image: bannerOne,
    title: "T-shirt / Tops",
    subtitle: "Summer Value Pack",
    description: "cool / colorful / comfy",
  },
  {
    id: 2,
    image: bannerTwo,
    title: "New Arrivals",
    subtitle: "Winter Collection",
    description: "warm / cozy / stylish",
  },
];
