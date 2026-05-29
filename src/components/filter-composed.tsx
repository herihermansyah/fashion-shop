"use client";

import {TbFilter2Cog} from "react-icons/tb";
import {IoIosArrowForward} from "react-icons/io";
import {Accordion} from "./ui/accordion";
import {IoMdClose} from "react-icons/io";
import {useState} from "react";

// ==================== MAIN KOMPONEN ====================
function FilterComposed() {
  return (
    <div className="w-full max-w-73.75 h-fit border border-gray-200 bg-white rounded-sm flex flex-col">
      {/* HEADER FILTER */}
      <div className="flex justify-between items-center px-7 py-5 border-b border-gray-200">
        <span className="text-xl font-bold text-Charcoal/80 tracking-wide">
          Filter
        </span>
        <TbFilter2Cog className="w-5 h-5 text-Muted-Gray-200 " />
      </div>

      <CategoryFilter />
      <PriceFilter />
      <ColorFilter />
      <SizeFilter />
      <DressFilter />
    </div>
  );
}

// ==================== PRICE FILTER ====================

const PriceFilter = () => {
  return (
    <Accordion title="Price">
      {/* Custom Range Slider Track */}
      <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6 mt-2">
        <div className="absolute left-[25%] right-[35%] h-full bg-[#8A33FD] rounded-full" />
        <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#8A33FD] border-2 border-white rounded-full shadow cursor-pointer" />
        <div className="absolute right-[35%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#8A33FD] border-2 border-white rounded-full shadow cursor-pointer" />
      </div>
      {/* Price Inputs Box */}
      <div className="flex gap-4 justify-between">
        <div className="w-1/2 border border-gray-300 rounded-lg py-2 text-center font-medium text-sm text-Charcoal">
          $70
        </div>
        <div className="w-1/2 border border-gray-300 rounded-lg py-2 text-center font-medium text-sm text-Charcoal">
          $600
        </div>
      </div>
    </Accordion>
  );
};

// ==================== COLOR FILTER ====================

const colorFilters = [
  {name: "Purple", class: "bg-[#8A33FD]"},
  {name: "Black", class: "bg-[#323232]"},
  {name: "Red", class: "bg-[#F44336]"},
  {name: "Orange", class: "bg-[#FF6F61]"},
  {name: "Navy", class: "bg-[#1F45FC]"},
  {name: "White", class: "bg-[#FFFFFF] border border-gray-200"},
  {name: "Brown", class: "bg-[#A52A2A]"},
  {name: "Green", class: "bg-[#4CAF50]"},
  {name: "Yellow", class: "bg-[#FFEB3B]"},
  {name: "Grey", class: "bg-[#D3D3D3]"},
  {name: "Pink", class: "bg-[#E91E63]"},
  {name: "Blue", class: "bg-[#00BCD4]"},
];

const ColorFilter = () => {
  return (
    <Accordion title="Colors">
      <div className="grid grid-cols-4 gap-x-4 gap-y-5 justify-items-center pt-1">
        {colorFilters.map((color, index) => (
          <button
            key={index}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-9 h-9 rounded-xl shadow-sm ${color.class} transition-transform group-hover:scale-105`}
            />
            <span className="text-xs font-semibold text-Muted-Gray-200 group-hover:text-black">
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </Accordion>
  );
};

// ==================== SIZE FILTER ====================

const sizeFilters = ["XXS", "XL", "XS", "S", "M", "L", "XXL", "3XL", "4XL"];

const SizeFilter = () => {
  return (
    <Accordion title="Size">
      <div className="grid grid-cols-3 gap-3 pt-1">
        {sizeFilters.map((size, index) => (
          <button
            key={index}
            className="border border-gray-200 rounded-lg py-2 text-sm font-semibold text-Charcoal hover:border-black hover:bg-black hover:text-white transition-all"
          >
            {size}
          </button>
        ))}
      </div>
    </Accordion>
  );
};

// ==================== DRESS FILTER ====================

const dressStyleFilters = [
  "Classic",
  "Casual",
  "Business",
  "Sport",
  "Elegant",
  "Formal (evening)",
];

const DressFilter = () => {
  return (
    <Accordion title="Dress Style" isLast>
      <div className="flex flex-col gap-4 pt-1">
        {dressStyleFilters.map((style, index) => (
          <button
            key={index}
            className="flex justify-between items-center w-full text-[16px] font-semibold text-Muted-Gray-200 hover:text-black transition-colors text-left"
          >
            <span>{style}</span>
            <IoIosArrowForward className="w-4 h-4 text-Muted-Gray-200" />
          </button>
        ))}
      </div>
    </Accordion>
  );
};

// ==================== CATEGORY FILTER ====================

const categoryFilters = [
  "Tops",
  "Printed T-shirts",
  "Plain T-shirts",
  "Kurti",
  "Boxers",
  "Full sleeve T-shirts",
  "Joggers",
  "Payjamas",
  "Jeans",
];

const CategoryFilter = () => {
  return (
    <div className="px-7 py-5 flex flex-col gap-4 border-b border-gray-200">
      {categoryFilters.map((category, index) => (
        <button
          key={index}
          className="flex justify-between items-center w-full text-[16px] font-semibold text-Muted-Gray-200 hover:text-black transition-colors text-left"
        >
          <span>{category}</span>
          <IoIosArrowForward className="w-4 h-4 text-Muted-Gray-200" />
        </button>
      ))}
    </div>
  );
};

const ResponsiveFilter = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full lg:hidden mt-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 border border-gray-300 rounded-sm font-semibold text-Charcoal bg-white shadow-sm active:bg-gray-50 transition-colors"
        >
          <TbFilter2Cog className="w-5 h-5" />
          <span>Open Filter</span>
        </button>
      </div>

      <div className="hidden lg:block">{children}</div>

      {/* 3. MOBILE DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white h-full shadow-xl flex flex-col z-50 animate-in slide-in-from-left duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <span className="text-lg font-bold text-Charcoal">
                Chose Filter
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <IoMdClose className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              <div className="[&>div]:border-none [&>div]:shadow-none">
                {children}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-[#8A33FD] text-white rounded-md font-semibold hover:bg-[#7526dd] transition-colors shadow-md"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export {FilterComposed, ResponsiveFilter};
