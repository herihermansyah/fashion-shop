import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";
import {cva, VariantProps} from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inputVariant = cva(
  "w-full px-5 py-4.5 rounded-lg text-Muted-Gray-200 placeholder:text-[18px] text-[18px] outline-none",
  {
    variants: {
      variant: {
        v1: "border border-Muted-Gray-200 bg-White",
        v2: "bg-White-Smoke pl-[52px] pr-[20px]",
      },
      isError: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: "v1",
        isError: true,
        className:
          "border font-bold border-Electric-Purple placeholder:text-Electric-Purple text-Electric-Purple",
      },
    ],
    defaultVariants: {
      variant: "v1",
    },
  },
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariant> & {
    label?: string;
    labelClassName?: string;
    error?: string;
    icon?: React.ReactNode;
    className?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {label, labelClassName, error, icon, variant = "v1", className, ...props},
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-2.5")}>
        {variant !== "v2" && label && (
          <label
            className={cn(
              "text-[18px] tracking-[2%] text-Charcoal",
              labelClassName,
            )}
          >
            {label}
          </label>
        )}

        <div className="flex items-center relative">
          {variant === "v2" && (
            <span className="absolute left-5 text-Muted-Gray-200">{icon}</span>
          )}
          <input
            className={cn(inputVariant({variant, isError: !!error, className}))}
            ref={ref}
            {...props}
          />
        </div>

        {variant !== "v2" && error && (
          <p className="text-[16px] text-red-600">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
