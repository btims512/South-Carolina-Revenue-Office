import React, { useState } from 'react';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBBtn } from 'mdb-react-ui-kit';

const MenuIcon = ({ isOpen }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '1.5rem' }}>
    <div
      style={{ width: '1.5rem', height: '0.2rem', backgroundColor: '#fff', borderRadius: '10px', transform: isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none' }}
    />
    <div
      style={{ width: '1.5rem', height: '0.2rem', backgroundColor: '#fff', borderRadius: '10px', transform: isOpen ? 'rotate(-45deg) translate(8px, -7px)' : 'none' }}
    />
    <div
      style={{ width: '1.5rem', height: '0.2rem', backgroundColor: '#fff', borderRadius: '10px', transform: isOpen ? 'scale(0)' : 'none' }}
    />
  </div>
);


export default function App() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
            className='bg-[#2f68ad]'
          >
          <div className='flex flex-col items-center'>
            <MenuIcon isOpen={showNavExternal} />
            <span className=" text-white text-[8px] font-['Open_Sans'] font-semibold tracking-[2px]" >
            MENU
            </span>
          </div>
          </MDBNavbarToggler>
          <div className='flex'>
          <div>
            <p>SOUTH CAROLINA REVENUE AND FISCAL AFFAIRS OFFICE</p>
          </div>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 1
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}
