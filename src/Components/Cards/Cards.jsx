import React from "react";
import Data from "../../images/Data-Research-Icon.svg";
import Geo from "../../images/Geography-Icon.svg";
import Programs from "../../images/Programs-Icon.svg";
import Legislative from "../../images/Legislative-Icon.svg";

const Cards = () => {
  return (
    <>
      <div className="mb-3 flex flex-col">
        <div id="card-row" className="bg-[#e1e5ea]">
          <div className="h-[300px] sm:h-auto">
            <div className="p-[75px] sm:p-0 pt-0 lg:h-[330px] w-auto sm:flex-wrap flex-col sm:content-around gap-2 sm:gap-3 h-[600px] flex sm:justify-around mt-[30px] justify-start">
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0 cursor-pointer">
                <div className="mobile-icon">
                  <img
                    className="sm:w-[100px] sm:h-[100px] w-[25px]"
                    src={Data}
                    alt="Data & Research"
                  />
                </div>
                <h6 className="uppercase pt-2 w-min-content self-center tracking-wide text-[#1b3a61] font-semibold">
                  Data & Research
                </h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0 cursor-pointer">
                <div className="mobile">
                  <img
                    className="sm:w-[100px] sm:h-[100px] w-[25px]"
                    src={Geo}
                    alt="Geography & Mapping"
                  />
                </div>
                <h6 className="uppercase pt-2 w-min-content self-center tracking-wide text-[#1b3a61] font-semibold">
                  Geography & Mapping
                </h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0 cursor-pointer">
                <img
                  className="sm:w-[100px] sm:h-[100px] w-[25px]"
                  src={Programs}
                  alt="Programs & Services"
                />
                <h6 className="uppercase pt-2 w-min-content tracking-wide text-[#1b3a61] font-semibold">
                  Program & Services
                </h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0 cursor-pointer">
                <img
                  className="sm:w-[100px] sm:h-[100px] w-[25px]"
                  src={Legislative}
                  alt="Legislative Fiscal Impacts"
                />
                <h6 className="uppercase pt-2 w-min-content tracking-wide text-[#1b3a61] font-semibold text-center w-[95px]">
                  Legislative Fiscal Impacts
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
