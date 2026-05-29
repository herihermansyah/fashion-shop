import {cva, type VariantProps} from "class-variance-authority";
import clsx, {ClassValue} from "clsx";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const typographyVariants = cva(
  "text-Muted-Gray-400 leading-[120%] font-semibold",
  {
    variants: {
      variant: {
        heading: "text-[56px]",
        h1: "text-[48px]",
        h2: "text-[40px]",
        h3: "text-[32px]",
        h4: "text-[24px]",
        h5: "text-[20px]",
        p: "text-[16px] leading-[24px]",
        label: "text-[14px] leading-[140%]",
        small: "text-[12px] leading-0",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  },
);

interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "p"
    | "label"
    | "small"
    | React.ElementType;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({as: Component = "p", className, variant, ...props}, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({variant, className}))}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
