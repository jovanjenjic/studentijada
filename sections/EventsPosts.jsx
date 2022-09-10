import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import { EventsCard } from "../components";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

function EventsPosts({ eventPosts }) {
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <section className="bg-white border-b py-20">
       <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Projekti i dogadjaji
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 w-1/4 opacity-25 my-0 py-0 rounded-t" />
        </div>

      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        Ispod se nalazi deo projekata i dogadjaji koje su organizovali nasi clanovi
        i koji se idalje organizuju nekoliko puta godisnje
      </p>
      <div className="w-4/5 mx-auto">
        <div className="mb-8 mt-8 ">
          <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-4"
          >
            {eventPosts.map((post) => (
              <EventsCard key={post.node?.createdAt} post={post?.node} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

EventsPosts.propTypes = {
  EventsPosts: PropTypes.arrayOf.isRequired,
};

export default EventsPosts;
