import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTriger,
} from "./ui/navigation-menu";

interface NavComposedProps<T, S> {
  data: T[];
  title: (item: T) => string;
  getContent: (item: T) => S[];
  subTitle: (subItem: S) => string;
  href: (subItem: S) => string;
}
function NavComposed<T, S>({
  data,
  title,
  getContent,
  subTitle,
  href,
}: NavComposedProps<T, S>) {
  return (
    <NavigationMenu>
      <NavigationMenuContent className="gap-3.75">
        {data.map((section, index) => (
          <React.Fragment key={index}>
            <NavigationMenuTriger>{title(section)}</NavigationMenuTriger>
            <NavigationMenuList className="flex-col items-start gap-1.25">
              {getContent(section).map((subItem, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="text-[18px] font-medium leading-[217%] text-White-Smoke whitespace-nowrap"
                    activeClassName="text-[18px] font-medium text-Muted-Gray-200"
                    href={href(subItem)}
                  >
                    {subTitle(subItem)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </React.Fragment>
        ))}
      </NavigationMenuContent>
    </NavigationMenu>
  );
}

export default NavComposed;
