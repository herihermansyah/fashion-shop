import ProductPage from "@/page/product-page";
import React from "react";

interface PageProps {
  params: {
    categories: string;
  };
}

async function page({params}: PageProps) {
  const result = await params;
  return (
    <div>
      <ProductPage params={result} />
    </div>
  );
}

export default page;
