import React from "react";
import {Divider, Divider2} from '../Divider/Divider'

const ServicesLinks = () => {
  return (
    <div>
      <div>
        <div className="pl-24 pr-24 pt-8">
          <div className="text-[22px] md:text-[28px] text-[#1b3a61] text-left font-bold">
            Popular Services & Links
          </div>
          <Divider />
            <div className="link-box flex underline text-[#0074c1] gap-[25px]">
              <div className="links flex flex-col pt-10 gap-6">
                <a href="#" className="text-[#0074c1] font-medium">Overview and History of the South Carolina State Budget</a>
                <a href="#" className="text-[#0074c1] font-medium">Employer Contribution Trends</a>
                <a href="#" className="text-[#0074c1] font-medium">Appropriation Bills and Acts</a>
              </div>
              <div className="inks flex flex-col pt-10 gap-6">
                <a href="#" className="text-[#0074c1] font-medium">Overview and History of the South Carolina State Budget</a>
                <a href="#" className="text-[#0074c1] font-medium">Employer Contribution Trends - June 4, 2019</a>
                <a href="#" className="text-[#0074c1] font-medium">Executive Budget Office State Agency Budget Plans(Requests)</a>
              </div>
              <div className="inks flex flex-col pt-10 gap-6">
                <a href="#" className="text-[#0074c1] font-medium">Overview and History of the South Carolina State Budget</a>
                <a href="#" className="text-[#0074c1] font-medium">Employer Contribution Trends - June 4, 2019</a>
                <a href="#" className="text-[#0074c1] font-medium">Executive Budget Office State Agency Budget Plans(Requests)</a>
              </div>
            </div>

            <div>
            <div className="section-x2 flex justify-between gap-[40px]">
            {/* 1 */}
            <div className="section-1 w-[300px]">
            <div className="pt-16 text-[16px] md:text-[22px] text-[#1b3a61] text-left font-bold">
            Recent Updates
          </div>
          <div className="divider">
          <Divider2 />
          </div>
            <div className="link-box flex underline text-[#0074c1] gap-[25px]">
              <div className="links flex flex-col pt-10 gap-6">
                <a href="#" className="text-[#0074c1] font-medium">Local Government Finance</a>
                <a href="#" className="text-[#0074c1] font-medium">Employer Contribution Trends</a>
                <a href="#" className="text-[#0074c1] font-medium">Appropriation Bills and Acts</a>
              </div>
            </div>
            </div>
            {/* 2 */}
            <div className="section-2 w-[300px]">
            <div className="pt-16 text-[16px] md:text-[22px] text-[#1b3a61] text-left font-bold">
            Calendar of Events
          </div>
          <div className="divider">
          <Divider2 />
          </div>
            <div className="link-box flex underline text-[#0074c1] gap-[25px] pb-14">
              <div className="links flex flex-col pt-10 gap-6">
                <a href="#" className="text-[#0074c1] font-medium">Overview and History of the South Carolina State Budget</a>
                <a href="#" className="text-[#0074c1] font-medium">Employer Contribution Trends</a>
                <a href="#" className="text-[#0074c1] font-medium">Appropriation Bills and Acts</a>
              </div>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLinks;
