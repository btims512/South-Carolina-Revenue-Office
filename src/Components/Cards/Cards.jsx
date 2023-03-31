import React from "react";
import Data from "../../images/Data-Research-Icon.svg";
import Geo from "../../images/Geography-Icon.svg";
import Programs from "../../images/Programs-Icon.svg";
import Legislative from "../../images/Legislative-Icon.svg";

const cardProperties = [
  {
    image: Data,
    alt: "Data & Research",
    title: "Data & Research",
    height: "60px",
  },
  {
    image: Geo,
    alt: "Geography & Mapping",
    title: "Geography & Mapping",
    height: "60px",
  },
  {
    image: Programs,
    alt: "Programs & Services",
    title: "Program & Services",
    height: "60px",
  },
  {
    image: Legislative,
    alt: "Legislative Fiscal Impacts",
    title: "Legislative Fiscal Impacts",
    height: "60px",
  },
];

const Cards = () => {
  return (
    <>
      <div className="mb-3 flex flex-col bg-[#e1e5ea]">
        <div id="card-row" className="bg-[#e1e5ea] max-w-screen-xl mx-auto">
          <div className="w-[90vw]  sm:h-auto">
            <div className="p-0 sm:p-0 pt-0 lg:h-[330px] w-auto sm:flex-wrap flex-col  sm:h-[600px] flex flex-wrap mt-[30px] sm:mt-0 mx-4 gap-[10px] sm:gap-4 justify-center sm:mb-0 mb-[35px] sm:content-center ">
              {cardProperties.map((card, index) => (
                <div
                  key={index}
                  className="cards-col bg-white  sm:w-[240px] lg:w-[220px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0 cursor-pointer w-[90vw] h-[5vh] xl:w-[280px] xl:h-[250px]"
                >
                  <img
                    className="sm:w-[100px] sm:h-[100px] w-[25px]"
                    src={card.image}
                    alt={card.alt}
                  />
                  <h6 className="uppercase pt-2 w-min-content self-center tracking-wide text-[#1b3a61] font-semibold text-center">
                    {card.title}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
