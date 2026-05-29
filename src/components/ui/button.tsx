import React, {forwardRef} from "react";
import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {cva, type VariantProps} from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out active:scale-98 text-[18px] font-medium disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        v1: "bg-Electric-Purple hover:bg-Electric-Purple-200 focus:bg-Electric-Purple-200 text-white disabled:bg-Muted-Gray disabled:text-Muted-Gray-200",
        v2: "ring-inset ring-Charcoal ring-1 text-Electric-Purple focus:ring-Electric-Purple disabled:bg-Muted-Gray disabled:text-Muted-Gray-200 disabled:ring-0",
        v3: "text-Electric-Purple hover:bg-Electric-Purple/3 focus:bg-Electric-Purple/3 hover:shadow-soft disabled:text-Muted-Gray-200 disabled:shadow-none",
        v4: "bg-white shadow-soft text-Electric-Purple hover:bg-Electric-Purple/3 focus:bg-Electric-Purple/3 disabled:bg-Muted-Gray disabled:text-Muted-Gray-200",
      },
      size: {
        small: "px-4 py-3 rounded-sm",
        large: "px-5 py-4 rounded-lg",
      },
      isIcon: {
        true: "p-3 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "v1",
      size: "large",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    isIcon?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {className, variant, size, isIcon, iconLeft, iconRight, children, ...props},
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({variant, size, isIcon, className}))}
        {...props}
      >
        {isIcon ? (
          <span>{iconRight || iconLeft}</span>
        ) : (
          <>
            {iconLeft && <span>{iconLeft}</span>}
            <span>{children}</span>
            {iconRight && <span>{iconRight}</span>}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
