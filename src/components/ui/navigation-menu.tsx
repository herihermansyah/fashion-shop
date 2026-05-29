"use client";

import {clsx, type ClassValue} from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MenuProps {
  children?: React.ReactNode;
  className?: string;
}

const NavigationMenu = forwardRef<HTMLElement, MenuProps>(
  ({children, className, ...props}, ref) => {
    return (
      <nav className={className} ref={ref} {...props}>
        {children}
      </nav>
    );
  },
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuTriger = forwardRef<HTMLHeadingElement, MenuProps>(
  ({children, className}, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          "text-[29px] font-bold leading-[217%] text-White-Smoke capitalize",
          className,
        )}
      >
        {children}
      </h4>
    );
  },
);
NavigationMenuTriger.displayName = "NavigationMenuTriger";

const NavigationMenuList = forwardRef<HTMLUListElement, MenuProps>(
  ({children, className}, ref) => {
    return (
      <ul ref={ref} className={cn("flex items-center ", className)}>
        {children}
      </ul>
    );
  },
);
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = forwardRef<HTMLLIElement, MenuProps>(
  ({children, className}, ref) => {
    return (
      <li ref={ref} className={cn(className)}>
        {children}
      </li>
    );
  },
);
NavigationMenuItem.displayName = "NavigationMenuItem";

interface NavigationMenuLinkProps extends MenuProps {
  href: string;
  activeClassName?: string;
}

const NavigationMenuLink = forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps
>(({children, href, className, activeClassName}, ref) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "font-medium text-[22px] text-Muted-Gray-200 capitalize",
        isActive
          ? cn("font-bold text-Charcoal", activeClassName)
          : cn(className),
      )}
    >
      {children}
    </Link>
  );
});
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuContent = forwardRef<HTMLDivElement, MenuProps>(
  ({children, className}, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col", className)}>
        {children}
      </div>
    );
  },
);
NavigationMenuContent.displayName = "NavigationMenuContent";

export {
  NavigationMenu,
  NavigationMenuTriger,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
};
