import React from "react";
import { ReactComponent as DataResearchIcon } from "../../images/Data-Research-Icon.svg";
import { ReactComponent as Geo } from "../../images/Geography-Icon.svg";
import { ReactComponent as Legislative } from "../../images/Legislative-Icon.svg";
import { ReactComponent as Programs } from "../../images/Programs-Icon.svg";

const Cards = () => {
  return (
    <>
      <div className="mb-3 flex flex-col">
        <div id="card-row" className="bg-[#e1e5ea]">
          <div className="h-[300px] sm:h-auto">
            <div className="p-[75px] sm:p-0 pt-0 lg:h-[330px] w-auto sm:flex-wrap flex-col sm:content-around gap-2 sm:gap-3 h-[600px] flex sm:justify-around mt-[30px] justify-start">
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0">
                <div className="mobile-icon">
                <DataResearchIcon
                  className="svg-icon"
                  width={115}
                  height={115}
                />
                </div>
                <h6 className="uppercase pt-2 w-min-content self-center">
                  Data & Research
                </h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0">
                <div className="mobile">
                <Geo className="svg-icon" width={115} height={115} />
                </div>
                <h6 className="uppercase pt-2 w-min-content self-center">
                  Geography & Mapping
                </h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0">
                <Legislative className="svg-icon" width={115} height={115} />
                <h6 className="uppercase pt-2 w-min-content">Program & Services</h6>
              </div>
              <div className="cards-col bg-white w-[225px] h-[60px] sm:h-[270px] flex sm:justify-center items-center flex-col justify-start gap-[15px] pl-[15px] sm:gap-0 sm:pl-0">
                <Programs className="svg-icon" width={115} height={115} />
                <h6 className="uppercase pt-2 w-min-content">
                  legislative Fiscal Impacts
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
