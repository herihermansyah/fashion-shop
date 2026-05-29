"use client";
import React from "react";
import {Card, CardContent, CardFooter} from "./ui/card";
import Image from "next/image";
import {ProductType} from "@/data/product-data";
import Typography from "./ui/typography";
import Button from "./ui/button";
import {FaArrowRightLong} from "react-icons/fa6";
import {FiHeart} from "react-icons/fi";
import Link from "next/link";
import {useFavoriteStore} from "@/store/use-favorite-store";

interface ProductCardProps {
  item: ProductType;
  variants?: "standard" | "navigation";
}

const ProductCard = ({item, variants = "standard"}: ProductCardProps) => {
  const isNavigation = variants === "navigation";

  const addToFavorite = useFavoriteStore((state) => state.addToFavorite);

  return (
    <Card className="flex flex-col gap-3.75">
      <CardContent className="relative aspect-270/393 w-full overflow-hidden rounded-xl">
        <Image
          src={item.media?.mainImage ?? "/"}
          alt={item.title ?? ""}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="eager"
          className="object-cover"
        />
        {!isNavigation && (
          <div className="absolute top-5 right-5">
            <Button
              onClick={() => addToFavorite(item)}
              variant={"v4"}
              iconRight={<FiHeart size={13} className="text-black" />}
              isIcon
              className="rounded-full w-8 h-8"
            />
          </div>
        )}
      </CardContent>
      <Link href={`/${item.categories}/${item.id}`}>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-start flex-col gap-1">
            <Typography
              variant="h5"
              className="font-bold text-[17px] text-Charcoal line-clamp-1"
            >
              {!isNavigation ? item.title : item.specifications?.style}
            </Typography>

            {!isNavigation ? (
              <Typography
                variant="label"
                className="font-semibold text-[13px] text-Muted-Gray-200 line-clamp-1"
              >
                {item.specifications?.fabric}
              </Typography>
            ) : (
              <Button
                variant={"v3"}
                className="p-0 text-[13px] font-medium text-Muted-Gray-200"
              >
                Explore now!
              </Button>
            )}
          </div>
          {!isNavigation ? (
            <div className="bg-Muted-Gray px-3 py-1 rounded-md">
              <Typography
                variant="label"
                className="font-semibold text-[13px] text-black"
              >
                {item.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Typography>
            </div>
          ) : (
            <span className="text-Muted-Gray-200">
              <FaArrowRightLong />
            </span>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
