import { useState } from "react";

export default function NavIcon({ icon: Icon, label, selected, onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-[50%] h-9 w-9 cursor-pointer transition-colors ${
        selected ? "bg-[#374248] text-[#AEBAC1]" : "text-[#AEBAC1] "
      }`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 fill-current" />
      {showTooltip && (
        <div
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm rounded-md bg-[#E9EDEF] text-black shadow-md z-10 whitespace-nowrap"
        >
          {label}
        </div>
      )}
    </div>
  );
}
