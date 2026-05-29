import React from "react";
import LineUp from "../ui/line-up";
import Typography from "../ui/typography";
import ProductCard from "../product-card";
import {ProductType} from "@/data/product-data";

interface ProductCardProps {
  title: string;
  products: ProductType[];
  variants?: "standard" | "navigation";
}

function ProductSection({
  title,
  products,
  variants = "standard",
}: ProductCardProps) {
  return (
    <section className="flex flex-col gap-17.5">
      <LineUp>
        <Typography
          variant={"h4"}
          className="capitalize sm:text-[34px] font-bold"
        >
          {title}
        </Typography>
      </LineUp>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 sm:gap-12.5">
        {products.map((item) => (
          <ProductCard variants={variants} key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
