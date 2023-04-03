import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import NavBarMobile from "./NavBarMobile";
import logo from "../../images/logo.png";

import { HiMagnifyingGlass } from "react-icons/hi2";

const MenuIcon = ({ isOpen }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      height: "1.5rem",
      boxShadow: "none",
    }}
  >
    <div
      style={{
        width: "2rem",
        height: "0.2rem",
        backgroundColor: "#fff",
        transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
        transition: "transform 0.2s ease-in-out",
      }}
    />
    <div
      style={{
        width: "2rem",
        height: "0.2rem",
        backgroundColor: "#fff",
        opacity: isOpen ? 0 : 1,
        transition: "opacity 0.2s ease-in-out",
        transform: isOpen ? "none" : "translateX(0)",
      }}
    />
    <div
      style={{
        width: "2rem",
        height: "0.2rem",
        backgroundColor: "#fff",
        transform: isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
        transition: "transform 0.2s ease-in-out",
      }}
    />
  </div>
);

export default function NavBar() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar
        style={{
          width: "100%",
          position: "fixed",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <MDBContainer
          fluid
          className="MDBcontainer hidden sm:mt-[-10px] mt-[-8px] "
          style={{ justifyContent: "flex-start" }}
        >
          <div></div>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
            className="h-[50px] mb-[-5px] md:h-[95px] bg-[#2f68ad]"
          >
            <div id="menu-button" className="flex flex-col items-center">
              <MenuIcon isOpen={showNavExternal} />
              <span className=" text-white text-[8px] font-['Open_Sans'] font-semibold tracking-[2px] mt-1">
                {showNavExternal ? "CLOSE" : "MENU"}
              </span>
            </div>
          </MDBNavbarToggler>
          <div className="title-logo">
            <div id="navbar-info" className="navbar-text gap-3 ml-5 pr-[15px]">
              <div>
                <a href="/">
                  <img
                    className="w-[40px] md:w-[78px]"
                    src={logo}
                    alt="South Carolina State seal"
                  />
                </a>
              </div>
              <div className="">
                <div className="text-[9px] md:text-[18px] text-[#1b3a61] text-left font-bold">
                  SOUTH CAROLINA <br /> REVENUE AND FISCAL AFFAIRS OFFICE
                </div>
                <div className="text-[8px] md:text-[16px] text-left italic">
                  Transforming data into solutions for South Carolina
                </div>
              </div>
            </div>
          </div>
        </MDBContainer>
        <div className="w-fit-content hidden md:ml-[-83px] md:mt-[15px] md:block">
          <SearchBox />
        </div>
      </MDBNavbar>
      <MDBCollapse show={showNavExternal} className="h-auto">
        <div className="flex desktop-menu">
          {/* left */}
          <div className="menu bg-[#f3f6f9] px-15 mt-[57px]">
            <ul className="left-menu shadow-3 py-7 flex flex-col w-200 p-30 md:p-[40px] h-[260px] justify-between mt-[30px]">
              <div
                className="border-b border-solid border-gray-300 pb-3 left m-0 self-center"
                color="link"
              >
                <a className="text-[#333]" href="#">
                  Home
                </a>
              </div>
              <div
                className="border-b border-solid border-gray-300 pb-3 left m-0 self-center"
                color="link"
              >
                <a className="text-[#333]" href="#">
                  About Us
                </a>
              </div>
              <div
                className="border-b border-solid border-gray-300 pb-3 left m-0 self-center"
                color="link"
              >
                <a className="text-[#333]" href="#">
                  Events
                </a>
              </div>
              <div className="left m-0 self-center" color="link">
                <a className="text-[#333]" href="#">
                  Boards & Committees
                </a>
              </div>
            </ul>
          </div>
          {/* right */}
          <div className="flex-row bg-white right-menu p-4 mt-[110px]">
            <div className="flex flex-wrap">
              <div className="flex ">
                <div className="m-0 w-[236px]">
                  <div>
                    <span className="menu-span">DATA &amp; RESEARCH</span>
                  </div>
                  <ul className="mt-2 pl-0">
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Healthcare</a>
                    </li>
                    <li>
                      <a href="#">Local Government</a>
                    </li>
                    <li>
                      <a href="#">Population &amp; Demographics</a>
                    </li>
                    <li>
                      <a href="#">Presentations</a>
                    </li>
                    <li>
                      <a href="#">State Finances and Economy</a>
                    </li>
                    <li>
                      <a href="#">
                        Inflation Adjustments for Legal Proceedings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="m-0 w-[236px]">
                  <div>
                    <span className="menu-span">GEOGRAPHY &amp; MAPPING</span>
                  </div>
                  <ul className="mt-2 pl-0">
                    <li>
                      <a href="#">Analytic Mapping Services</a>
                    </li>
                    <li>
                      <a href="#">County Boundary Program</a>
                    </li>
                    <li>
                      <a href="#">Jurisdictional Mapping</a>
                    </li>
                    <li>
                      <a href="#">NC/SC Boundary</a>
                    </li>
                    <li>
                      <a href="#">SC Real Time Network (RTN)</a>
                    </li>
                    <li>
                      <a href="#">Statewide Aerial Imagery</a>
                    </li>
                    <li>
                      <a href="#">Transportation Network Carrier Maps</a>
                    </li>
                    <li>
                      <a href="#">LocateMe</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="m-0 w-[236px] ">
                  <div>
                    <span className="menu-span">PROGRAMS & SERVICES</span>
                  </div>
                  <ul className="mt-2 pl-0">
                    <li>
                      <a href="#">Data Services &amp; Online Solutions</a>
                    </li>
                    <li>
                      <a href="#">Fiscal Analysis</a>
                    </li>
                    <li>
                      <a href="#">Geodetic Survey</a>
                    </li>
                    <li>
                      <a href="#">Precinct Demographics &amp; Redistricting</a>
                    </li>
                    <li>
                      <a href="#">State 9-1-1 Program</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <div className="m-0 w-[236px] ">
                  <div>
                    <span className="menu-span">
                      LEGISLATIVE FISCAL IMPACTS
                    </span>
                  </div>
                  <ul className="mt-2 pl-0">
                    <li>
                      <a href="#">Current General Assembly Session</a>
                    </li>
                    <li>
                      <a href="#">Previous General Assembly Session</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <NavBarMobile style={{ zInex: "-1" }} />
        </div>
        <div className="border"></div>
      </MDBCollapse>
    </>
  );
}

const SearchBox = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <MDBContainer style={{ width: "85%" }}>
      <div className="relative">
        <button
          onClick={handleButtonClick}
          className="p-[.75rem] lg:border-[1px] border-solid border-[#3068ad] bg-[#3068ad] rounded-sm  mr-[13px]"
        >
          <HiMagnifyingGlass
            size={24}
            strokeWidth={2}
            className="custom-icon"
          />
        </button>
        {isDropDownVisible && (
          <form
            action="/search"
            method="get"
            acceptCharset="UTF-8"
            className="flex ml-[-496px] p-2 bg-[#3068ad]"
          >
            <div className="form-item form-group self-start mr-2">
              <input
                className="block w-full py-1 px-2 text-base font-normal leading-1.5 h-10 mt-1"
                id="search"
                placeholder="Search rfa.sc.gov"
                type="text"
                name="name"
                required
                minlength="4"
                maxlength="8"
                size="10"
              ></input>
            </div>
            <div className="form-actions border">
              <button
                type="submit"
                id="search-button"
                value="Search"
                className="solid-icon-btn h-[41px] w-[120px]"
              >
                <span className="submit-text flex gap-2">
                  Search
                  <HiMagnifyingGlass
                    size={16}
                    strokeWidth={2.5}
                    color="white"
                  />
                </span>
                <span className="submit-icon"></span>
              </button>
            </div>
          </form>
        )}
      </div>
    </MDBContainer>
  );
};
