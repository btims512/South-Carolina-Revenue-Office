import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-4 relative flex-grow p-3 pl-4 text-sm uppercase font-semibold text-blue-900 h-[68px]"
        onClick={toggleAccordion}
      >
        <span className="menu-span-mobile ">{title}</span>
        <button
          className={`transform ${isAccordionOpen ? "rotate-180" : ""}`}
          aria-expanded={isAccordionOpen}
          aria-controls="accordion-panel-1"
        >
          <div className="flex justify-center items-center w-12 h-12 fill-[#fff] bg-[#3068ad] border-none">
            <ChevronDownIcon className="w-8 fill-[#fff] " />
          </div>
        </button>
      </div>
      {isAccordionOpen && (
        <div className="py-4" id="accordion-panel-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
