import React from 'react';
import { ReactComponent as DataResearchIcon } from '../../images/Data-Research-Icon.svg';
import { ReactComponent as Geo } from '../../images/Geography-Icon.svg';
import { ReactComponent as Legislative } from '../../images/Legislative-Icon.svg';
import { ReactComponent as Programs } from '../../images/Programs-Icon.svg';
import './Cards.css'; 

const Cards = () => {
  return (
    <>
      <div className='mb-3 flex flex-col'>
        <div id='card-row' className='bg-[#e1e5ea]'>
          <div className=''>
            <div className='h-[305px] flex justify-around mt-[30px]'>
              <div className='cards bg-white w-[225px] h-[270px] flex justify-center items-center flex-col'>
                <DataResearchIcon className="svg-icon" width={115} height={115} /> 
                <h6 className='uppercase'>Data & Research</h6>
              </div>
              <div className='cards bg-white w-[225px] h-[270px] flex justify-center items-center flex-col'>
                <Geo className="svg-icon" width={115} height={115} />
                <h6 className='uppercase'>Geography & Mapping</h6>
              </div>
              <div className='cards bg-white w-[225px] h-[270px] flex justify-center items-center flex-col'>
                <Legislative className="svg-icon" width={115} height={115} />
                <h6 className='uppercase'>Program & Services</h6>
              </div>
              <div className='cards bg-white w-[225px] h-[270px] flex justify-center items-center flex-col'>
                  <Programs className="svg-icon" width={115} height={115} />
                  <h6 className='uppercase'>legislative Fiscal Impacts</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
