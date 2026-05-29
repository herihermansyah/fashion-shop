import {FilterComposed, ResponsiveFilter} from "@/components/filter-composed";
import ProductCard from "@/components/product-card";
import Typography from "@/components/ui/typography";
import {productData} from "@/data/product-data";
import React from "react";

interface ProductPageProps {
  params: {
    categories: string;
  };
}

function ProductPage({params}: ProductPageProps) {
  const currentCategory = params.categories;

  const filterProduct = productData.filter(
    (item) =>
      item.categories?.toLocaleLowerCase() ===
      currentCategory.toLocaleLowerCase(),
  );
  return (
    <div className="container px-4 large:px-0 large:w-wide mx-auto pb-40 flex flex-col lg:flex-row gap-12.5">
      <ResponsiveFilter>
        <FilterComposed />
      </ResponsiveFilter>
      <div className="flex flex-col gap-10 lg:mt-12 w-full">
        <div className="flex justify-between items-center">
          <Typography variant={"h4"} className="capitalize">
            {currentCategory}&apos;s Clothing
          </Typography>
          <div className="flex gap-5">
            <Typography variant={"h4"}>New</Typography>
            <Typography variant={"h4"}>Recomended</Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filterProduct.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
