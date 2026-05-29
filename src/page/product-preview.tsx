"use client";

import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import {ProductType, ProductRating, ProductColor} from "@/data/product-data";
import Image from "next/image";
import React from "react";
import {MdOutlineMessage} from "react-icons/md";
import {FaArrowRight} from "react-icons/fa6";
import {IoCartOutline} from "react-icons/io5";
import {
  FiCheckCircle,
  FiCreditCard,
  FiRefreshCw,
  FiTruck,
} from "react-icons/fi";
import LineUp from "@/components/ui/line-up";
import {useCartStore} from "@/store/use-cart-store";

interface ProductPreviewProps {
  item: ProductType;
}

function ProductPreview({item}: ProductPreviewProps) {
  const [selectedColor, setSelectedColor] = React.useState<ProductColor | null>(
    null,
  );
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }

    addToCart({
      newProduct: item,
      size: selectedSize,
      color: selectedColor,
    });
  };
  return (
    <div className="container mx-auto large:w-wide px-4 large:px-0">
      <div className="flex flex-col gap-25">
        <div className="flex justify-between gap-5">
          {/* left */}
          <Media item={item} />
          {/* right */}
          <div className="w-133 flex flex-col gap-8.75">
            <Typography variant={"h4"} className="text-[34px] font-extrabold">
              {item.title}
            </Typography>

            {/* rating */}
            <Rating item={item.rating ?? {score: 0, reviewsCount: 0}} />

            {/* availbale size */}
            <AvailabelSizes
              item={item}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            {/* color */}
            <Color
              color={item.availableColors ?? []}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            {/* button */}
            <div className="flex items-center gap-6.25 flex-wrap">
              <Button
                iconLeft={<IoCartOutline />}
                className="px-10 py-3 capitalize font-bold"
                onClick={handleAddToCart}
              >
                add to cart
              </Button>
              <Button
                className="py-3 px-8 text-Muted-Gray-400 font-extrabold"
                variant={"v2"}
              >
                {item.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Button>
            </div>

            {/* line */}
            <div className="w-full h-px bg-Muted-Gray-200" />
            {/* features */}
            <Features features={item.features ?? []} />
          </div>
        </div>
        {/* description */}
        <Detail item={item} />
      </div>
    </div>
  );
}

export default ProductPreview;

// ====================== RATING ======================

interface RatingType {
  item: ProductRating;
}
const Rating = ({item}: RatingType) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex gap-4 items-center text-Muted-Gray-200">
        <span>⭐⭐⭐⭐⭐</span>
        <span>{item.score}</span>
      </div>
      <div className="flex gap-4 items-center text-Muted-Gray-200">
        <MdOutlineMessage size={25} />
        <span>{item.reviewsCount} comment</span>
      </div>
    </div>
  );
};

// ====================== AVAILABLE SIZES ======================

interface AvailabelSizesType {
  item: ProductType;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

const AvailabelSizes = ({
  item,
  selectedSize,
  setSelectedSize,
}: AvailabelSizesType) => {
  return (
    <div className="flex flex-col gap-6.25">
      <div className="flex items-center gap-4">
        <span className="text-Muted-Gray-400 text-[18px] font-semibold capitalize">
          select size
        </span>
        <Button
          variant={"v3"}
          iconRight={<FaArrowRight />}
          className="p-0 capitalize text-Muted-Gray-200 text-[18px]"
        >
          size guide
        </Button>
      </div>
      <div className="flex gap-6 items-center flex-wrap">
        {item.availableSizes?.map((item, index) => {
          const isSelected = selectedSize === item;
          return (
            <button
              onClick={() => setSelectedSize(item)}
              className={`w-10.5 h-10.5 rounded-xl border text-[14px] cursor-pointer
                  ${isSelected ? "bg-Muted-Gray-400 text-Muted-Gray" : "border-Muted-Gray"}
                `}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ====================== COLOR ======================

interface ColorType {
  color: ProductColor[];
  selectedColor: ProductColor | null;
  setSelectedColor: (color: ProductColor) => void;
}

const Color = ({color, selectedColor, setSelectedColor}: ColorType) => {
  return (
    <div className="flex flex-col gap-6.25">
      <span className="text-Muted-Gray-400 text-[18px] font-semibold capitalize">
        colours available
      </span>
      <div className="flex gap-4 items-center">
        {color.map((item, index) => {
          const isSelected = selectedColor?.hex === item.hex;
          return (
            <button
              onClick={() => setSelectedColor(item)}
              key={index}
              className={`w-5.5 h-5.5 rounded-full bg-[${item.hex}] border cursor-pointer transition-all ${
                isSelected
                  ? "ring-2 ring-offset-2 ring-Muted-Gray-400 border-white scale-110"
                  : "border-Muted-Gray hover:scale-105"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

// ====================== FEATURES ======================

interface FeaturesType {
  features: string[];
}

const iconMapping: Record<string, React.ReactNode> = {
  "Secure payment": <FiCreditCard />,
  "Size & Fit": <FiCheckCircle />,
  "Free shipping": <FiTruck />,
  "Free Shipping & Returns": <FiRefreshCw />,
};

const Features = ({features}: FeaturesType) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {features?.map((item, index) => {
        const iconComponent = iconMapping[item];
        return (
          <div key={index} className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-Muted-Gray flex items-center justify-center text-Muted-Gray-200">
              {iconComponent}
            </div>
            <div>
              <Typography className="text-Muted-Gray-400 text-[18px] font-medium">
                {item}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ====================== MEDIA======================

const Media = ({item}: ProductPreviewProps) => {
  return (
    <div className="flex gap-8.5 items-center">
      <div className="flex flex-col gap-5.5">
        {item.media?.thumbnails.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={"thumbnail"}
            width={68}
            height={68}
            className="cursor-pointer rounded-2xl"
          />
        ))}
      </div>
      <Image
        src={item.media?.mainImage ?? "/"}
        alt={item.title ?? ""}
        width={500}
        height={500}
      />
    </div>
  );
};

// ====================== DETAIL ======================

const Detail = ({item}: ProductPreviewProps) => {
  return (
    <div className="flex flex-col gap-7.5">
      <LineUp>
        <Typography variant={"h4"} className="capitalize text-[28px] font-bold">
          product description
        </Typography>
      </LineUp>
      <div className="flex gap-7.5 justify-between">
        <div className="flex flex-col gap-7.5">
          {/* description */}
          <div className="flex flex-col gap-7.5">
            <Typography className="text-Muted-Gray-400 text-[18px] font-medium capitalize">
              description
            </Typography>
            <Typography className="text-Muted-Gray-200 text-[18px] font-medium">
              {item.description}
            </Typography>
          </div>

          {/* detail */}
          <div className="w-fit bg-Muted-Gray/40 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3">
              {/* fabric */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize border-b border-r border-Muted-Gray">
                <span className="text-Muted-Gray-200">fabric</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.fabric}
                </span>
              </div>
              {/* pattern */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize border-b border-Muted-Gray">
                <span className="text-Muted-Gray-200">pattern</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.pattern}
                </span>
              </div>
              {/* fit */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize border-b border-l border-Muted-Gray">
                <span className="text-Muted-Gray-200">fit</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.fit}
                </span>
              </div>
              {/* neck */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize border-r border-Muted-Gray">
                <span className="text-Muted-Gray-200">neck</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.neck}
                </span>
              </div>
              {/* sleeve */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize">
                <span className="text-Muted-Gray-200">sleeve</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.sleeves}
                </span>
              </div>
              {/* style */}
              <div className="flex flex-col gap-2 text-[16px] px-10 py-4 capitalize border-l border-Muted-Gray">
                <span className="text-Muted-Gray-200">style</span>
                <span className="text-Muted-Gray-400">
                  {item.specifications?.style}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* media */}
        <div className="w-full h-full aspect-532/328 overflow-hidden rounded-2xl">
          <Image
            src={item.media?.mainImage ?? ""}
            alt={item.title ?? ""}
            width={532}
            height={328}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
