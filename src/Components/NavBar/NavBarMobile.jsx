import Accordion from "./Accordion";

function MyComponent() {
  return (
    <>
    <div className="flex justify-between">
    <ul className="left-menu bg-[#f3f6f9] shadow-3 py-7 flex flex-col w-200 p-30 md:p-[40px] h-[260px] justify-between w-screen">
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
    <div className="w-screen">
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
      <Accordion title="Geography & Mapping">
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
      <Accordion title="Programs &amp; Services">
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
      {/* Add two more accordions here */}
    </div>
    </div>
    </>
  );
}

export default MyComponent;
