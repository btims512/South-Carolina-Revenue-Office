import React from 'react'
import Logo from '../../images/Group-262.png'

const Footer = () => {
  return (
    <>
      <div id='footer' className=' h-auto bg-[#21406c] p-5'>
        <div className='footer-container flex flex-col sm:flex-row md:gap-5 sm:justify-around'>
        <div className='flex flex-col gap-4 mb-[30px]'>
          <div className='sec-1 text-transform-none text-white font-sans font-bold text-lg leading-5'>
          South Carolina <br />
          Revenue and Fiscal Affairs Office
          </div>
          <div>
            <img src={Logo} alt="" className='w-[135px]' />
          </div>
        </div>
          <div className='sec-2 text-white mb-[30px] sm:hidden block'>
          <ul className='border-l border-white border-l-1 pl-3'>
            <li>
            <a className='text-white font-sans font-semibold hover:text-white hover:underline' href="">Privacy Statement</a>
            <a className='text-white font-sans font-semibold' href="">FOIA</a>
            <a className='text-white font-sans font-semibold' href="">Disclosures and Reporting</a>
            <a className='text-white font-sans font-semibold' href="">Report Fraud</a>
            <a className='text-white font-sans font-semibold' href="">Accessibility</a>
            <a className='text-white font-sans font-semibold' href="">Employment Opportunities</a>
            <a className='text-white font-sans font-semibold' href="">Contact Us</a>
            </li>
          </ul>
          </div>
          {/* Desktop menu */}
          <div className='sec-2 text-white mb-[30px] sm:block hidden'>
          <ul>
            <li>
            <a className='text-white font-sans font-semibold hover:text-white hover:underline' href="">Privacy Statement</a>
            <a className='text-white font-sans font-semibold' href="">FOIA</a>
            <a className='text-white font-sans font-semibold' href="">Disclosures and Reporting</a>
            <a className='text-white font-sans font-semibold' href="">Report Fraud</a>
            <a className='text-white font-sans font-semibold' href="">Accessibility</a>
            <a className='text-white font-sans font-semibold' href="">Employment Opportunities</a>
            <a className='text-white font-sans font-semibold' href="">Contact Us</a>
            </li>
          </ul>
          </div>
          <div className='sec-3 text-white font-sans'>
          <div className='tracking-widest uppercase text-[#93a4bd] text-[14px] font-bold mb-2'>
          Location
          </div>
          <div>
          <p>
          1000 Assembly Street <br />
          Rembert Dennis Building, Suite 421 <br />
          Columbia, SC 29201 <br />
          (803) 734-3793 <br />
          </p>
          <p>publicrelations@rfa.sc.gov</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer