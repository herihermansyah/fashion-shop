import ProductPreview from "@/page/product-preview";
import React from "react";
import {productData} from "@/data/product-data";

interface PageProps {
  params: {
    categories: string;
    preview: number;
  };
}

async function page({params}: PageProps) {
  const {preview} = await params;
  const result = productData.find((item) => item.id === Number(preview));

  if (!result) {
    return <div className="container mx-auto p-4">Produk tidak ditemukan.</div>;
  }
  return (
    <div>
      <ProductPreview item={result} />
    </div>
  );
}

export default page;
