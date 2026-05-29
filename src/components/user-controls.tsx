"use client";

import React, {forwardRef, useEffect} from "react";
import Button from "./ui/button";
import {LuShoppingCart} from "react-icons/lu";
import {MdFavoriteBorder} from "react-icons/md";
import {AiOutlineUser} from "react-icons/ai";
import {usePathname, useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";
import {useCartStore} from "@/store/use-cart-store";
import {useFavoriteStore} from "@/store/use-favorite-store";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface UserControlsProps {
  className?: string;
}

const UserControls = forwardRef<HTMLDivElement, UserControlsProps>(
  ({className}, ref) => {
    const pathname = usePathname();
    const router = useRouter();

    const cartItem = useCartStore((state) => state.cartItems);
    const totalItems = cartItem.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    const favoriteItems = useFavoriteStore((state) => state.favoriteItems);

    const [isReady, setIsReady] = React.useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 0);
      return () => clearTimeout(timer);
    }, []);

    const userControls = [
      {
        id: 1,
        icon: (
          <div className="relative">
            <MdFavoriteBorder size={20} />
            {!isReady ? (
              <div className="absolute w-7 h-7 p-2 flex items-center justify-center -top-7 -right-5 rounded-full animate-spin bg-Lavender-Mist font-bold text-Electric-Purple ">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              favoriteItems.length > 0 && (
                <div className="absolute  p-2 w-7 h-7 flex items-center justify-center -top-7 -right-5 bg-Lavender-Mist font-bold text-Electric-Purple rounded-full">
                  <span>{favoriteItems.length}</span>
                </div>
              )
            )}
          </div>
        ),

        link: "/favorite",
      },
      {id: 2, icon: <AiOutlineUser size={20} />, link: "/login"},
      {
        id: 3,
        icon: (
          <div className="relative">
            <LuShoppingCart size={20} />
            {!isReady ? (
              <div className="absolute w-7 h-7 p-2 flex items-center justify-center -top-7 -right-5 rounded-full animate-spin bg-Lavender-Mist font-bold text-Electric-Purple ">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              totalItems > 0 && (
                <div className="absolute  p-2 w-7 h-7 flex items-center justify-center -top-7 -right-5 bg-Lavender-Mist font-bold text-Electric-Purple rounded-full">
                  <span>{totalItems}</span>
                </div>
              )
            )}
          </div>
        ),
        link: "/cart",
      },
    ];

    return (
      <div ref={ref} className={cn("flex items-center gap-3", className)}>
        {userControls.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Button
              onClick={() => router.push(item.link)}
              key={item.id}
              variant={isActive ? "v1" : "v2"}
              iconLeft={item.icon}
              isIcon
              className={
                isActive ? "" : "bg-Muted-Gray ring-0 text-Muted-Gray-200"
              }
            />
          );
        })}
      </div>
    );
  },
);

UserControls.displayName = "UserControls";

export default UserControls;
