import {StaticImageData} from "next/image";
// man images
import manOne from "@/assets/product/man/man1.png";
import manTwo from "@/assets/product/man/man2.png";
import manThree from "@/assets/product/man/man3.png";

// man image_preview
import manOnePreview from "@/assets/product/man/man1pro.png";
import manTwoPreview from "@/assets/product/man/man2pro.png";
import manThreePreview from "@/assets/product/man/man3pro.png";
import manFourPreview from "@/assets/product/man/man4pro.png";
import manFivePreview from "@/assets/product/man/man5pro.png";

// women images
import womenOne from "@/assets/product/women/women1.png";
import womenTwo from "@/assets/product/women/women2.png";
import womenThree from "@/assets/product/women/women3.png";

// women image_preview
import womenOnePreview from "@/assets/product/women/women1pro.png";
import womenTwoPreview from "@/assets/product/women/women2pro.png";
import womenThreePreview from "@/assets/product/women/women3pro.png";
import womenFourPreview from "@/assets/product/women/women4pro.png";
import womenFivePreview from "@/assets/product/women/women5pro.png";

export interface ProductRating {
  score: number;
  reviewsCount: number;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSpecifications {
  fabric: string;
  pattern: string;
  fit: string;
  neck: string;
  sleeves: string;
  style: string;
}

export interface ProductMedia {
  mainImage: string | StaticImageData;
  thumbnails: StaticImageData[];
  videoUrl: string;
  videoViews: string;
}

export type ProductCategory = "Man" | "Women" | "Top";

export interface ProductType {
  id?: string | number;
  title?: string;
  price?: number;
  currency?: string;
  rating?: ProductRating;
  categories?: ProductCategory;
  availableSizes?: string[];
  availableColors?: ProductColor[];
  description?: string;
  specifications?: ProductSpecifications;
  features?: string[];
  media?: ProductMedia;
}

export const productData: ProductType[] = [
  // man
  {
    id: 1,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manOne,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 2,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manTwo,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 3,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manThree,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // women
  {
    id: 4,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenOne,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 5,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenTwo,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 6,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenThree,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // man
  {
    id: 7,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manOne,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 8,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manTwo,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 9,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manThree,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // women
  {
    id: 10,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenOne,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 11,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenTwo,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 12,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenThree,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // man
  {
    id: 13,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manOne,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 14,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manTwo,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 15,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manThree,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // women
  {
    id: 16,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenOne,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 17,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenTwo,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 18,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Women",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: womenThree,
      thumbnails: [
        womenOnePreview,
        womenTwoPreview,
        womenThreePreview,
        womenFourPreview,
        womenFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  // mam
  {
    id: 19,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manOne,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 20,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manTwo,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
  {
    id: 21,
    title: "Raven Hoodie With Black colored Design",
    price: 63.0,
    currency: "USD",
    rating: {
      score: 3.5,
      reviewsCount: 120,
    },
    categories: "Man",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: [
      {name: "Black", hex: "#333333"},
      {name: "Yellow", hex: "#FFEB3B"},
      {name: "Pink", hex: "#E91E63"},
      {name: "Maroon", hex: "#880E4F"},
    ],
    description:
      "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    specifications: {
      fabric: "Bio-washed Cotton",
      pattern: "Printed",
      fit: "Regular-fit",
      neck: "Round Neck",
      sleeves: "Half-sleeves",
      style: "Casual Wear",
    },
    features: [
      "Secure payment",
      "Size & Fit",
      "Free shipping",
      "Free Shipping & Returns",
    ],
    media: {
      mainImage: manThree,
      thumbnails: [
        manOnePreview,
        manTwoPreview,
        manThreePreview,
        manFourPreview,
        manFivePreview,
      ],
      videoUrl: "/videoshop.mp4",
      videoViews: "1.00 M",
    },
  },
];
