import React from "react";
import PropTypes from "prop-types";

function Landing() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="text-white flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Da li si student na FTN-u?
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Studentska unija Fakulteta tehničkih nauka
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Pritisni na dugme ispod, popuni formu i postani i ti deo naše
            organizacije!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Učlani se
          </button>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src="hero.png" />
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Landing;
