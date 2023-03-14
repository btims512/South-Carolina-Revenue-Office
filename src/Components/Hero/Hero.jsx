import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Hero = () => {
  return (
    <div>
      <div className="search-block">
        <div className="container">
          <div className="col-md-8 offset-md-2 text-center">
            <h2 className="text-white text-[28px] font-slab font-normal">Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services</h2>
            <form action="/search" method="get" acceptCharset="UTF-8">
              <div className="form-item form-group self-start">
              
              <input className="block w-full py-1 px-2 text-base font-normal leading-1.5 h-10 mt-1" id="search" placeholder="Search rfa.sc.gov"  type="text" name="name" required
              minlength="4" maxlength="8" size="10"></input>
              </div>
              <div className="form-actions">
                <button type="submit" id="search-button" value="Search" className="solid-icon-btn mt-1 h-[41px] w-[136px]">
                  <span className="submit-text flex gap-2">Search
                    <HiMagnifyingGlass size={16} strokeWidth={2.5} color="white" />
                  </span>
                  <span className="submit-icon"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Hero;