import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

function AfterMovieAndVideos({ videoUrl, videoBgUrl, subDetails, images }) {
  const [showVideo, setShowVideo] = React.useState(true);

  React.useEffect(() => {
    if (subDetails?.videoBgUrl) setShowVideo(true);
    else setShowVideo(false);
  }, []);

  const showVideoOrImage = subDetails?.videoBgUrl && subDetails?.images.length;

  return (
    <div className="relative z-10 bg-black bg-opacity-20">
      <div
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 93%, 0 100%)" }}
        className="z-1 relative h-[calc(90vh-65px)] "
      >
        {!showVideo && <Carousel images={images} />}
        <div className="vimeo-wrapper">
          {showVideo && (
            <iframe
              title="Video sa konferencije 2021."
              className="w-full"
              src={videoBgUrl}
              frameBorder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
            />
          )}

          <div className="z-10 absolute flex justify-center items-center w-full h-full rounded-md bg-black bg-opacity-40 lg:p-10 px-4 py-6">
            <div className=" flex flex-col items-center ">
              <span className="-rotate-1 rounded-lg bg-sky-100 py-px px-2 text-sm text-sky-800">
                270 studenata je učestvovalo na konferenciji 2021. godine
              </span>
              <h3 className="mt-2 max-w-2xl text-white text-center font-bold leading-tight text:xl lg:text-2xl xl:text-3xl md:leading-tight">
                Ukoliko želis da pogledaš ceo video sa konferencije, klikni na
                dugme ispod.
                {showVideoOrImage ? (
                  <button
                    type="button"
                    onClick={() => setShowVideo((prevState) => !prevState)}
                    className="cursor-pointer text-sky-500 hover:text-sky-700 duration-300"
                  >
                    Pogledaj slike
                  </button>
                ) : (
                  <p />
                )}
              </h3>
              <Link href={videoUrl}>
                <a href={videoUrl} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="font-bold mt-8 transition  ease hover:bg-sky-700 inline-block bg-sky-500 lg:text-lg md:text-md text-sm font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                  >
                    Link do videa
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-10 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      {/* <img alt="landing" src={imgDate.src} /> */}
                    </div>
                    <h6 className="text-xl font-semibold">Datum</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      {/* <img alt="landing" src={imgLocation.src} /> */}
                    </div>
                    <h6 className="text-xl font-semibold">Lokacija</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:pt-6 w-full md:w-4/12 px-4 text-center transform transition duration-300 ease-in-out hover:-translate-y-2">
              <motion.div
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-inner rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center">
                      {/* <img alt="landing" src={imgMembers.src} /> */}
                    </div>
                    <h6 className="text-xl font-semibold">Učesnici</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

AfterMovieAndVideos.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  videoBgUrl: PropTypes.string.isRequired,
  subDetails: PropTypes.arrayOf.isRequired,
  images: PropTypes.arrayOf.isRequired,
};

export default AfterMovieAndVideos;
