import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';
import headerImg from '../public/header.jpg';
import Timer from './TImer';

const LandingComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="w-full">
        <div className="flex bg-blue-50" style={{ height: '80vh', clipPath: 'polygon(0 0, 100% 0%, 100% 93%, 0 100%)'}}>
            <div className="flex items-start text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div className="flex flex-col justify-evenly h-5/6">
                  <Timer />
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
                    <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Prijavi se</a>
                        <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                    </div>
                  </div>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(12% 0, 100% 0%, 100% 100%, 0 100%)'}}>
                    <img className="h-full" src="https://setplan2021.eu/wp-content/uploads/2021/09/SET-PLAN_750-x-500_web-foto_20212-800x600.jpg" />
                    <div className="h-full bg-black opacity-25"></div>
            </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Datum</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Lokacija</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Ucesnici</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default LandingComponent;