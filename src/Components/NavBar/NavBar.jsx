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

export default function App() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid className="justify-start align-start">
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
          <div id="navbar-info" className="navbar-text gap-3 pr-[15px]">
            <div>
              <a href="/">
                <img className="w-[75px]" src={logo} alt="logo" />
              </a>
            </div>
            <div>
              <div className="text-[18px] text-[#1b3a61] text-left font-bold">
                SOUTH CAROLINA <br /> REVENUE AND FISCAL AFFAIRS OFFICE
              </div>
              <div className="text-[16px] text-left">
                Transforming data into solutions for South Carolina
              </div>
            </div>
          </div>
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
          <div className="left-menu bg-light shadow-3 p-4 flex flex-col ">
            <MDBBtn block className="border-bottom m-0" color="link">
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
          <div className="right-menu bg-light shadow-3 p-4 flex flex-col">
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 1
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
          </div>
        </div>
      </MDBCollapse>
    </>
  );
}
