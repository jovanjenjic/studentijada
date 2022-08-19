import React from "react";
import imgPeople from "../public/group.png";

function Description() {
  return (
    <div
      style={{ clipPath: "polygon(0 0, 100% 0%, 100% 93%, 0 100%)" }}
      className="w-full py-80 relative -top-80 flex justify-center bg-black bg-opacity-20 rounded-lg"
    >
      <section className="pb-20 bg-blueGray-100">
        <div className="container mx-auto px-4">
          <div className="pt-6">
            <div className="mb-12 flex flex-wrap -mx-4 justify-center">
              <div className="px-4 relative w-full lg:w-8/12 text-center">
                <span className="-rotate-1 rounded-lg bg-sky-100 py-px px-2 text-sm text-sky-800">
                  117+ prijavljenih učesnika ove nedelje
                </span>
                <h3 className="text-3xl font-bold mt-3 mb-1 text-white">
                  Sponzori i podrška
                </h3>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-white">
                  Sponzori i podrška konferencije bez koje ne bismo uspeli da je
                  realizujemo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-evenly items-center mt-24">
            <div className="w-full md:w-5/12 px-4">
              <div className="text-blueGray-500 bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
                <img alt="landing" src={imgPeople.src} />
              </div>
              <h3 className="text-white text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                Don't let your users guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a className="font-bold text-white mt-8" href="#/">
                Check Notus Design System PRO!
              </a>
            </div>
            <div className="w-full md:w-5/12 px-4">
              <div>
                <img
                  src="https://www.codeference.org/cod-sajt-sponzori24.957e4867.png"
                  alt="support"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
