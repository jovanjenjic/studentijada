import React from "react";
import imgPeople from "../public/group.png";

function Support({ subDetails }) {
  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 93%, 0 100%)" }}
      className="w-full pt-8 pb-10 lg:pb-32 relative flex justify-center bg-black bg-opacity-20 rounded-lg"
    >
      <section className="pb-10 lg:pb-20 bg-blueGray-100">
        <div className="container mx-auto px-4">
          <div className="pt-6">
            <div className="mb-12 flex flex-wrap -mx-4 justify-center">
              <div className="px-4 relative w-full lg:w-8/12 text-center">
                <span className="-rotate-1 rounded-lg bg-sky-100 py-px px-2 text-sm text-sky-800">
                  117+ prijavljenih učesnika ove nedelje
                </span>
                <h3 className="lg:text-3xl text-2xl font-bold mt-3 mb-1 text-white">
                  Sponzori i podrška
                </h3>
                <p className="mt-2 mb-4 lg:text-xl text-lg leading-relaxed text-white">
                  Sponzori i podrška konferencije bez koje ne bismo uspeli da je
                  realizujemo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-evenly items-center lg:mt-24 mt-12">
            <div className="w-full md:w-5/12">
              <div className="text-blueGray-500 bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
                <img alt="landing" src={imgPeople.src} />
              </div>
              <h3 className="text-white lg:text-3xl text-xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className="lg:text-lg text-base font-light leading-relaxed mt-4 mb-4 text-white">
                Do not let your users guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="lg:text-lg text-base font-light leading-relaxed mt-4 mb-4 text-white">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you are good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a className="font-bold text-white mt-8" href="#/">
                Check Notus Design System PRO!
              </a>
            </div>
            <div className="w-full md:w-5/12 lg:mt-0 mt-14">
              <img
                src={subDetails?.sponsorsImage?.url}
                alt="support"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
