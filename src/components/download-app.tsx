import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTriger,
} from "./ui/navigation-menu";
import Image from "next/image";
import Typography from "./ui/typography";
import playstoreicon from "../assets/icon/playstore.svg";
import applestoreicon from "../assets/icon/appstore.svg";

const downloadAppMenu = [
  {
    id: 1,
    app: "google play",
    link: "/sdff",
    image: playstoreicon,
    size: "min-w-[29px]",
    desc: "android app on",
  },
  {
    id: 2,
    app: "app store",
    link: "/sdff",
    image: applestoreicon,
    size: "min-w-[20px]",
    desc: "available on the",
  },
];

function DownloadApp() {
  return (
    <NavigationMenu>
      <NavigationMenuTriger className="mb-5 text-center sm:text-left">
        Download the app
      </NavigationMenuTriger>
      <NavigationMenuList className="gap-7">
        {downloadAppMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              className="flex gap-3 items-center"
              href={item.link}
            >
              <Image
                src={item.image}
                alt={item.app}
                width={30}
                height={30}
                loading="eager"
                className={item.size}
              />
              <NavigationMenuContent className="gap-px">
                <Typography className="text-[10px] text-white">
                  {item.desc}
                </Typography>
                <Typography className="text-[18px] text-white">
                  {item.app}
                </Typography>
              </NavigationMenuContent>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DownloadApp;
