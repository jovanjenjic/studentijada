/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import email from "../public/email.png";
import andjela from "../public/andjela.jpg";
import nikolina from "../public/nikolina.jpg";
import zarko from "../public/zarko.jpg";
import mirko from "../public/mirko.jpg";
import vakanjac from "../public/vakanjac.jpg";
import zelic from "../public/zelic.png";
import binic from "../public/binic.png";
import strahinja from "../public/strahinja.jpg";

const Team = () => {
  return (
    <section className="bg-gray-100">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="w-full my-2 lg:text-5xl text-4xl font-bold leading-tight text-center text-gray-800">
          Predstavnici departmana
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 w-2/5 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Pronadjite studenta koji pripada vašem departmanu i kontaktirajte ga
          ukoliko imate bilo kakav problem, nedoumicu ili pitanje.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={nikolina?.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Nikolina Delić
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Građevinarstvo
            </p>

            <div className="flex mt-3 -mx-2">
            <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                delicnikolina7@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={andjela.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
               Anđela Živković
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Arhitektura
            </p>

            <div className="flex mt-3 -mx-2">
                           <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unijaa"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                andjela.zivkovic322@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:p-8 p-4 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={mirko.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Mirko Vojinović
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Elektrotehnika i računarstvo
            </p>

            <div className="flex mt-3 -mx-2">
              <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                vojinovic.mirko1999@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={strahinja?.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Strahinja Grujičić
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Arhitektura
            </p>

            <div className="flex mt-3 -mx-2">
            <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                grujicicstrahinja58@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={vakanjac.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Damjan Vakanjac
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Inženjerski menadžment
            </p>

            <div className="flex mt-3 -mx-2">
                           <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                vakanjac.damjan@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={zarko?.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Žarko Nedeljkov
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Geodezija
            </p>

            <div className="flex mt-3 -mx-2">
                           <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                zarkonedeljkov@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={zelic.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Nikola Zelić
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              GRID
            </p>

            <div className="flex mt-3 -mx-2">
                           <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                niksa864@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform group hover:bg-orange-400  rounded-xl">
            <img
              className="object-cover lg:w-32 lg:h-32 w-28 h-28 rounded-full ring-4 ring-gray-300"
              src={binic?.src}
              alt=""
            />

            <h1 className="text-center mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Luka Binić
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-900">
              Gradjevinarstvo
            </p>

            <div className="flex mt-3 -mx-2">
                           <a
                href="#"
                className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white flex"
                aria-label="Facebook"
              >
              <img
                alt="Logo unija"
                width="25"
                src={email?.src}
                className="mr-2"
              />
                binicluka@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Team.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Team;
