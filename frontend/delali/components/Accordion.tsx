"use client";
import React, { ReactNode, useState } from "react";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-300 rounded-md bg-color_gray_for_light_mode dark:bg-color_gray_for_dark_mode">
      <div
        className="flex items-center justify-between px-4 py-1 cursor-pointer gap-4"
        // onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium ">{title}</h3>

        <div className="w-6 h-6">
          <FaCaretDown
            className={`w-6 h-6 transition-transform  ${
              isExpanded ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 py-3 border-t border-gray-300 ">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
