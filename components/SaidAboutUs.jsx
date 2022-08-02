import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const SaidAboutUs = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="antialiased w-full h-full text-gray-400 font-inter p-10 mb-20">
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl text-white">Rekli su o nama</h1>
            <p className="text-light text-gray-200 text-xl">
              Here are our pricing plans
            </p>
          </div>
          <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10"
          >
            <div className="card ">
              <div className="card__side card__side--front">
                <card className="relative h-[30rem] sm:h-96 w-[35rem]">
                  <img src="https://picsum.photos/seed/1840/1000/600" className="object-cover w-full h-full" />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/10 flex flex-col items-center justify-center text-center">
                      <img src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg" />
                      <p className="text-lg px-14 text-gray-300 mt-10">
                        GitHub helps us ensure that we have our security controls baked into our pipelines all the way from the first line of code we’re writing.
                      </p>
                      <img src="https://picsum.photos/50/50" className="rounded-full border-2 mt-8" />
                      <p className="text-base font-bold px-14 text-gray-300 mt-3">
                        Chief Information Security Officer
                      </p>
                      <p className="text-sm font-light px-14 text-gray-300 ">
                        Aleksandar Okiljevic
                      </p>
                  </div>
                </card>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="flex flex-col justify-around col-span-6 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 h-full">
                      <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                          <img className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                              src="https://picsum.photos/200" />

                      </div>
                      <div className="mb-5 border-t border-gray-50">
                          <div className="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                              <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                      className="ml-1 text-gray-500 text-ms"> 30k</div>
                              </div>
                              <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                      className="ml-1 text-gray-500 text-ms"> 60k</div>
                              </div>
                              <div className="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                      className="ml-1 text-gray-500 text-ms"> 120k</div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <card className="relative h-[30rem] sm:h-96 w-[35rem]">
                  <img src="https://picsum.photos/seed/1840/1000/600" className="object-cover w-full h-full" />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/80 flex flex-col items-center justify-center text-center">
                      <img src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg" />
                      <p className="text-lg px-14 text-gray-300 mt-10">
                        GitHub helps us ensure that we have our security controls baked into our pipelines all the way from the first line of code we’re writing.
                      </p>
                      <img src="https://picsum.photos/50/50" className="rounded-full border-2 mt-8" />
                      <p className="text-base font-bold px-14 text-gray-300 mt-3">
                        Chief Information Security Officer
                      </p>
                      <p className="text-sm font-light px-14 text-gray-300 ">
                        Nikola Mandic
                      </p>
                  </div>
                </card>
              </div>
              <div className="card__side card__side--back card__side--back-2">
              <div className="flex flex-col justify-around col-span-6 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 h-full">
                    <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                        <img className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                            src="https://picsum.photos/200" />

                    </div>
                    <div className="mb-5 border-t border-gray-50">
                        <div className="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                    className="ml-1 text-gray-500 text-ms"> 30k</div>
                            </div>
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                    className="ml-1 text-gray-500 text-ms"> 60k</div>
                            </div>
                            <div className="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                    className="ml-1 text-gray-500 text-ms"> 120k</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <card className="relative h-[30rem] sm:h-96 w-[35rem]">
                  <img src="https://picsum.photos/seed/1840/1000/600" className="object-cover w-full h-full" />
                  <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-cyan-700/40 to-blue-500/80 flex flex-col items-center justify-center text-center">
                      <img src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg" />
                      <p className="text-lg px-14 text-gray-300 mt-10">
                        GitHub helps us ensure that we have our security controls baked into our pipelines all the way from the first line of code we’re writing.
                      </p>
                      <img src="https://picsum.photos/50/50" className="rounded-full border-3 mt-8" />
                      <p className="text-base font-bold px-14 text-gray-300 mt-3">
                        Chief Information Security Officer
                      </p>
                      <p className="text-sm font-light px-14 text-gray-300 ">
                        Mladen Popara
                      </p>
                  </div>
                </card>
              </div>
              <div className="card__side card__side--back card__side--back-3">
              <div className="flex flex-col justify-around col-span-6 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 h-full">
                    <div className="flex justify-center px-2 mx-3 text-sm font-medium text-gray-400">
                        <img className="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
                            src="https://picsum.photos/200" />

                    </div>
                    <div className="mb-5 border-t border-gray-50">
                        <div className="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center ">
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Sales:<div
                                    className="ml-1 text-gray-500 text-ms"> 30k</div>
                            </div>
                            <div className="flex mb-2 mr-4 font-normal text-gray-700 ">Recipies: <div
                                    className="ml-1 text-gray-500 text-ms"> 60k</div>
                            </div>
                            <div className="flex mb-2 mr-4 text-gray-700 ">Customers: <div
                                    className="ml-1 text-gray-500 text-ms"> 120k</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaidAboutUs;