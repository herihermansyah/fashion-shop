import clsx, {ClassValue} from "clsx";
import Image, { StaticImageData } from "next/image";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BannerProps {
  children?: React.ReactNode;
  className?: string;
}

const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({children, className}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
      >
        {children}
      </div>
    );
  },
);

Banner.displayName = "Banner";

interface BannerBackgroundProps extends BannerProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  imageClass?: string;
}

const BannerBackground = forwardRef<HTMLImageElement, BannerBackgroundProps>(
  (
    {
      className,
      src,
      alt,
      width,
      height,
      loading,
      children,
      imageClass,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative w-full h-full", className)}>
        <Image
          ref={ref}
          {...props}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={cn("w-full h-full object-cover", imageClass)}
        />
        {children}
      </div>
    );
  },
);

BannerBackground.displayName = "BannerBackground";

const BannerContent = forwardRef<HTMLDivElement, BannerProps>(
  ({children, className}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 mx-auto max-w-264 px-4 flex items-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

BannerContent.displayName = "BannerContent";

export {Banner, BannerBackground, BannerContent};
