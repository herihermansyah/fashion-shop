import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const headerMenuData = [
  {id: 1, title: "shop", href: "/"},
  {id: 2, title: "men", href: "/man"},
  {id: 3, title: "women", href: "/women"},
  {id: 4, title: "combos", href: "/combos"},
  {id: 5, title: "joggers", href: "/jogger"},
];

function NavHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="xl:flex-row flex-col gap-3 xl:gap-10 ">
        {headerMenuData.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink href={item.href}>
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavHeader;
