import Accordion from "./Accordion";

function MyComponent() {
  return (
    <>
      <div className="main">
        <div className="flex md:flex-row justify-between flex-col ">
          <ul className="left-menu bg-[#f3f6f9] shadow-3 flex flex-col w-200 p-30 h-[260px] justify-between w-screen pl-2 md:mt-[80px] sm:mt-[30px] mt-[25px]">
            <li className="border-b border-solid border-gray-300 pt-[32.8px] sm:pl-0 md:pl-0">
              <a
                className="text-[#333] text-[15px] md:text-[16px] font-bold"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="border-b border-solid border-gray-300 pt-[32.8px] sm:pl-0 md:pl-0">
              <a
                className="text-[#333] text-[15px] md:text-[16px] font-bold"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="border-b border-solid border-gray-300 pt-[32.8px] sm:pl-0 md:pl-0">
              <a
                className="text-[#333] text-[15px] md:text-[16px] font-bold"
                href="#"
              >
                Events
              </a>
            </li>
            <li className="pt-[18px] sm:pl-0 md:pl-0">
              <a
                className="text-[#333] text-[15px] md:text-[16px] font-bold pb-[20px]"
                href="#"
              >
                Boards & Committees
              </a>
            </li>
          </ul>

          <div className="w-screen lg:flex lg:flex-row md:mt-[80px]">
            <Accordion title="DATA & RESEARCH">
              <div className="m-0 w-[236px]">
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
                    <a href="#">Population & Demographics</a>
                  </li>
                  <li>
                    <a href="#">Presentations</a>
                  </li>
                  <li>
                    <a href="#">State Finances and Economy</a>
                  </li>
                  <li>
                    <a href="#">Inflation Adjustments for Legal Proceedings</a>
                  </li>
                </ul>
              </div>
            </Accordion>
            <Accordion title="Legislative Fiscal Impacts">
              <div className="m-0 w-[236px]">
              </div>
            </Accordion>
            <Accordion title="Geography & Mapping">
              <div className="m-0 w-[236px]">
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
                    <a href="#">NC/SC Bounty</a>
                  </li>
                  <li>
                    <a href="#">SC Real Time Network (RTN)</a>
                  </li>
                  <li>
                    <a href="#">Statewide Aerial Imagery</a>
                  </li>
                  <li>
                    <a href="#">Transportation Networks Carrier Maps</a>
                  </li>
                  <li>
                    <a href="#">LocateMe</a>
                  </li>
                </ul>
              </div>
            </Accordion>
            <Accordion title="Programs &amp; Services">
              <div className="m-0 w-[236px]">
                <ul className="mt-2 pl-0">
                  <li>
                    <a href="#">Data Services & Online Solutions</a>
                  </li>
                  <li>
                    <a href="#">Fiscal Analysis</a>
                  </li>
                  <li>
                    <a href="#">Geodetic Survey</a>
                  </li>
                  <li>
                    <a href="#">Precinct Demographics & Redistricting</a>
                  </li>
                  <li>
                    <a href="#">State 9-1-1 Program</a>
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
