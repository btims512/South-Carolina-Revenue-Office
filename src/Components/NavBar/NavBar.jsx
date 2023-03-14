import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";
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
  const isDisabled = true;

  return (
    <>
      <MDBNavbar>
        <MDBContainer
          fluid
          className=""
          style={{ justifyContent: "flex-start" }}
        >
        <div>
          
        </div>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
            className="bg-[#2f68ad]"
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
                <img className="w-[78px]" src={logo} alt="logo" />
              </a>
            </div>
            <div>
              <div className="text-[18px] text-[#1b3a61] text-left font-bold">
                SOUTH CAROLINA <br /> REVENUE AND FISCAL AFFAIRS OFFICE
              </div>
              <div className="text-[16px] text-left italic">
                Transforming data into solutions for South Carolina
              </div>
            </div>
          </div>
          </div>
        </MDBContainer>
        <MDBContainer className="mag-glass" style={{ 
          width: 'fit-content',
          marginLeft: '-65px',
          marginTop: '15px'
        }}>
          <div className="icon-container mr-4">
            <HiMagnifyingGlass
              size={24}
              strokeWidth={2}
              className="custom-icon"
            />
          </div>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal} className="" style={{ maxWidth: "90vw" }}>
  <div className="flex w-36">
    {/* left */}
    <div className="left-menu shadow-3 py-7 flex flex-col w-235">
      <MDBBtn disabled={isDisabled} block className="border-bottom left m-0" color="link">
        Home
      </MDBBtn>
      <MDBBtn disabled={isDisabled} block className="border-bottom left m-0" color="link">
        About Us
      </MDBBtn>
      <MDBBtn disabled={isDisabled} block className="border-bottom m-0" color="link">
        Events
      </MDBBtn>
      <MDBBtn disabled={isDisabled} block className="border-bottom m-0" color="link">
        Boards & Committees
      </MDBBtn>
    </div>
    {/* right */}
    <div className="flex">
    <div className="right-menu p-4 flex flex-col">
    <div className="flex">
      <div className="border-bottom m-0 w-[236px]">
        <div>
          <span className="menu-span">DATA &amp; RESEARCH</span>
        </div>
        <ul className="mt-2 pl-0">
          <li><a href="#">Education</a></li>
          <li><a href="#">Healthcare</a></li>
          <li><a href="#">Local Government</a></li>
          <li><a href="#">Population &amp; Demographics</a></li>
          <li><a href="#">Presentations</a></li>
          <li><a href="#">State Finances and Economy</a></li>
          <li><a href="#">Inflation Adjustments for Legal Proceedings</a></li>
        </ul>
      </div>
    </div>
    <div className="flex">
      <div className="border-bottom m-0 w-[236px]">
        <div>
          <span className="menu-span">GEOGRAPHY &amp; MAPPING</span>
        </div>
        <ul className="mt-2 pl-0">
          <li><a href="#">Analytic Mapping Services</a></li>
          <li><a href="#">County Boundary Program</a></li>
          <li><a href="#">Jurisdictional Mapping</a></li>
          <li><a href="#">NC/SC Boundary</a></li>
          <li><a href="#">SC Real Time Network (RTN)</a></li>
          <li><a href="#">Statewide Aerial Imagery</a></li>
          <li><a href="#">Transportation Network Carrier Maps</a></li>
          <li><a href="#">LocateMe</a></li>
        </ul>
      </div>
    </div>
    <div className="flex">
    <div className="border-bottom m-0 w-[236px]">
        <div>
          <span className="menu-span">PROGRAMS & SERVICES</span>
        </div>
        <ul className="mt-2 pl-0">
          <li><a href="#">Data Services &amp; Online Solutions</a></li>
          <li><a href="#">Fiscal Analysis</a></li>
          <li><a href="#">Geodetic Survey</a></li>
          <li><a href="#">Precinct Demographics &amp; Redistricting</a></li>
          <li><a href="#">State 9-1-1 Program</a></li>
        </ul>
      </div>
    </div>
    <div className="flex">
    <div className="border-bottom m-0 w-[236px]">
        <div>
          <span className="menu-span">LEGISLATIVE FISCAL IMPACTS</span>
        </div>
        <ul className="mt-2 pl-0">
          <li><a href="#">Current General Assembly Session</a></li>
          <li><a href="#">Previous General Assembly Session</a></li>
          <li><a href="#">Forms</a></li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  </div>
</MDBCollapse>


    </>
  );
}
