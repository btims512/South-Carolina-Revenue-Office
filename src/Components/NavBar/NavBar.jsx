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

      <MDBCollapse show={showNavExternal} className="">
        <div className="flex w-36">

        {/* left */}
          <div className="left-menu shadow-3 py-7 flex flex-col w-235">
            <MDBBtn block className="border-bottom m-0 " color="link">
              Home
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              About Us
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Events
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Boards & Committees
            </MDBBtn>
          </div>

          {/* right */}
          <div className="right-menu bg-light shadow-3 p-4 flex flex-col">
            <MDBBtn block className="border-bottom m-0" color="link">
              DATA & RESEARCH
              <br />
              <br />
              <ul>
                <li>
                  Education
                </li>
                <li>
                  Healthcare
                </li>
                <li>
                  Local Government
                </li>
                <li>
                  Population & Demographics
                </li>
                <li>
                  Presentations
                </li>
                <li>
                  State Finances and Economy
                </li>
                <li>
                  Inflation Adjustments for Legal Proceedings
                </li>
              </ul>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
            GEOGRAPHY & MAPPING
              <br />
              <br />
              <ul>
                <li>
                Analytic Mapping Services
                </li>
                <li>
                County Boundary Program
                </li>
                <li>
                Jurisdictional Mapping
                </li>
                <li>
                NC/SC Boundary
                </li>
                <li>
                SC Real Time Network (RTN)
                </li>
                <li>
                Statewide Aerial Imagery
                </li>
                <li>
                Transportation Network Carrier Maps
                </li>
                <li>
                LocateMe
                </li>
              </ul>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
            GEOGRAPHY & MAPPING
              <br />
              <br />
              <ul>
                <li>
                Data Services & Online Solutions
                </li>
                <li>
                Fiscal Analysis
                </li>
                <li>
                Geodetic Survey
                </li>
                <li>
                Precinct Demographics & Redistricting
                </li>
                <li>
                State 9-1-1 Program
                </li>
              </ul>
            </MDBBtn>
          </div>
        </div>
      </MDBCollapse>
    </>
  );
}
