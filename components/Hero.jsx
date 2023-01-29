import React from 'react';
import LandingImg from '../public/img/Landing01.jpg';

/// Page Sections
const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "100vh"
      }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${LandingImg.src})`
        }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white font-semibold text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl">
              <div className="flex pb-4">
                <p className='text-red-500'>20+</p>
                <p className='pl-3'>Fakulteta</p>
              </div>
              <div className="flex pb-4">
                <p className='text-red-500'>Svi</p>
                <p className='pl-3'>Domovi</p>
              </div>
              <div className="flex pb-4">
                <p className='text-red-500'>Sve</p>
                <p className='pl-3'>Akademije</p>
              </div>
            </div>
            <div className='flex justify-start flex-col lg:flex-row'>
              <a href="www.tailus.io" className="mb-4 font-semibold lg:mr-4 rounded-3xl transition-all duration-500 bg-red-500 border border-transparent hover:border-white hover:bg-transparent text-white lg:px-16 lg:py-3 py-2">
                PROČITAJ VIŠE
              </a>
              <a href="www.tailus.io" className="mb-4 font-semibold rounded-3xl transition-all duration-500 bg-transparent border border-red-500 hover:bg-red-500 text-white lg:px-16 lg:py-3 py-2">
                KUPI KARTU
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;