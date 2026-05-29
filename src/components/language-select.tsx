import React from "react";

interface LanguageSelectProps {
  className?: string;
}

function LanguageSelect({className}: LanguageSelectProps) {
  return (
    <div className={className}>
      <select className="bg-transparent text-[18px] font-normal pr-4.75 outline-none cursor-pointer">
        <option value="en">English (United States)</option>
        <option value="id">Bahasa Indonesia</option>
      </select>
    </div>
  );
}

export default LanguageSelect;
