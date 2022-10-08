import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import * as ga from "../lib";

function EventsCard({ event }) {
  const onOpenPost = () => {
    ga.event({
      action: "On event (codeference, impovement, pokreni igru...) click",
    });
  };

  return (
    <div className="group relative h-72">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{ backgroundImage: `url('${event?.image?.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 group from-gray-400 via-gray-700 md:group-hover:from-gray-900 md:group-hover:to-black to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="duration-100 group-hover:hidden md:flex hidden text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {event.name}
        </p>
        <div className="top-0 flex items-center absolute bottom-5 w-full justify-center">
          <Link href={event?.url} onClick={onOpenPost}>
            <p className="cursor-pointer text-center	md:group-hover:inline md:hidden align-middle text-white text-shadow ml-2 font-bold px-8 hover:text-orange-300 transition duration-300">
              {event.exce}..
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

EventsCard.propTypes = {
  event: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EventsCard;
