import TitleComponent from "./TitleComponent";
import React from "react";
 

const titleData = {
  titleText: 'Dobrodošli na najveću studentsku žurku!',
  subtitleText: 'Najveća studentska žurka, u kojoj učestvuju svi studentski domov. Uz festivalski osmišljen program, zagarantovan dobar provod i mnogo zabave! Ulaznice za ovu nezaboravnu žurku studenti mogu kupiti kod svojih predstavnika.',
  subtitleTextSecond: 'Na ovom dogadjaju će učestvovati 5000 studenata iz Novog Sada i Srbije. Klikom na link ispod možeš da kupiš kartu i obezbediš svoju kartu za ovu najveću i nezaboravnu žurku. Broj mesta je ograničen, zato požuri dok još ima mesta!',
  colorText: '[Najveća studentska žurka]',
  backgroundText: 'ŽURKA',
  backgroundColor: 'text-white',
};

const Services = () => {
  return(
    <section className="bg-gray-100">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                  </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">
                  Free Revisions
                  </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                  </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold">
                  Verified Company
                  </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                  </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-wrap items-center pt-12">
          <div className="w-full md:w-5/12 mr-auto ml-auto text-justify text-right">
            <TitleComponent {...titleData} />
          </div>

          <div className="w-full md:w-1/3 px-4 pb-10 mr-auto ml-auto">
            <img
              alt="..."
              src="http://studentijada.com/assets/section_01.e61d2ebb.jpg"
              className="w-full align-middle rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;