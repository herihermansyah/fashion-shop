import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

import {FaFacebookF} from "react-icons/fa";
import {PiInstagramLogoLight} from "react-icons/pi";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa6";

const socialMedia = [
  {id: 1, icon: <FaFacebookF size={20} />, link: "/s"},
  {id: 2, icon: <PiInstagramLogoLight size={20} />, link: "/sdfsdf"},
  {id: 3, icon: <FaTwitter size={20} />, link: "/sdfsd"},
  {id: 4, icon: <FaLinkedinIn size={20} />, link: "/sdfsdf"},
];

function SocialMedia() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2.5">
        {socialMedia.map((item) => (
          <NavigationMenuItem
            key={item.id}
            className="bg-White-Smoke w-9.25 h-9.25 rounded-xl flex items-center justify-center"
          >
            <NavigationMenuLink
              activeClassName="text-Muted-Gray-400"
              className="text-Muted-Gray-400 "
              href={item.link}
            >
              {item.icon}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default SocialMedia;
