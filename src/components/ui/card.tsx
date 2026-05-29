import clsx, {ClassValue} from "clsx";
import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({children, className}, ref) => {
    return (
      <div className={cn("", className)} ref={ref}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({children, className}, ref) => {
    return (
      <div className={cn(className)} ref={ref}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = "CardContent";

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({children, className}, ref) => {
    return (
      <div className={cn(className)} ref={ref}>
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

const CardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({children, className}, ref) => {
    return (
      <div className={cn(className)} ref={ref}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";

export {Card, CardContent, CardHeader, CardFooter};
