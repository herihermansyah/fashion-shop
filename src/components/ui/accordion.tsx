"use client";
import {useState} from "react";
import {IoIosArrowForward} from "react-icons/io";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export const Accordion = ({
  title,
  children,
  isLast = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`px-7 py-5 ${!isLast ? "border-b border-gray-200" : ""}`}>
      {/* Tombol Trigger Buka-Tutup */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full cursor-pointer text-left text-lg font-bold text-Charcoal/80"
      >
        <span>{title}</span>
        <IoIosArrowForward
          className={`w-5 h-5 text-Charcoal/80 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      {/* Konten dengan Animasi Mulus */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0 overflow-hidden"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
