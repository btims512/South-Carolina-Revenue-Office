import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Hero = () => {
  return (
    <header>
      <div className="search-block md:pb-[100px]">
        <div className="container">
          <div className="col-md-8 offset-md-2 text-center">
            <h2 className="text-white text-[22px] sm:text-[28px] font-slab font-normal leading-[36px]">
              Providing insightful research, analysis, and resources to
              facilitate informed policy decisions and administration of
              services
            </h2>
            <form action="/search" method="get" acceptCharset="UTF-8">
              <div className="form-item form-group self-start">
                <label className="hidden" htmlFor="search">
                  Search rfa.sc.gov
                </label>
                <input
                  className="block w-full py-1 px-2 text-base font-normal leading-1.5 h-10 mt-1"
                  id="search"
                  placeholder="Search rfa.sc.gov"
                  type="text"
                  name="name"
                  required
                  minLength="4"
                  maxLength="8"
                  size="10"
                ></input>
              </div>
              <div className="form-actions">
                <button
                  type="submit"
                  id="search-button"
                  className="solid-icon-btn mt-1 h-[41px] w-[136px]"
                  role="button"
                  aria-label="Search rfa.sc.gov"
                >
                  <span className="submit-text flex gap-2">
                    Search
                    <HiMagnifyingGlass
                      size={16}
                      strokeWidth={2.5}
                      color="white"
                      alt="Search icon"
                    />
                  </span>
                  <span className="submit-icon"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
