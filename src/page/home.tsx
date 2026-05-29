import BigSavingZone from "@/components/sections/big-saving-zone";
import Deals from "@/components/sections/deals";
import NewArrival from "@/components/sections/new-arrival";
import React from "react";
import {BannerShop} from "@/components/sections/banner-list";
import TopBrandDeals from "@/components/sections/top-brand-deals";
import {productData} from "@/data/product-data";
import ProductSection from "@/components/sections/product-section";
import Feedback from "@/components/sections/feedback";

function Home() {
  const productMan = productData
    .filter((item) => item.categories === "Man")
    .slice(0, 8);

  const productWomen = productData
    .filter((item) => item.categories === "Women")
    .slice(0, 4);
  return (
    <div className="mb-25">
      <BannerShop />
      <div className="container mx-auto large:w-wide px-4 large:px-0 mt-32.5 mb-10 flex flex-col gap-25">
        <Deals />
        <NewArrival />
        <BigSavingZone />
        <ProductSection
          title="Categories for man"
          products={productMan}
          variants="navigation"
        />
        <ProductSection
          title="Categories for women"
          products={productWomen}
          variants="navigation"
        />
        <TopBrandDeals />
        <ProductSection
          title="In The Limelight"
          products={productData.slice(0, 4)}
        />
        <Feedback />
      </div>
    </div>
  );
}

export default Home;
