import React from "react";
import PropTypes from "prop-types";
import {
  MiddleWaveComponent,
  MiddleWaveComponentRevarse,
  Meta,
} from "../components";
import { AboutUs, EventsPosts, Landing, Team } from "../sections";
import { getEvents } from "../services";

function Home({ events }) {
  return (
    <div>
      <Meta
        description="Vodeća studentska organizacija na FTN-u."
        keywords="Unija, FTN, Fakultet Tehničkih nauka, FTN, Novi Sad, Student, Organizacija, Codeference, Construction, IImprovement"
        title="Studentska unija FTN"
      />
      <Landing />
      <MiddleWaveComponent />
      <AboutUs />
      <EventsPosts eventPosts={events} />
      <Team />
      <MiddleWaveComponentRevarse />
      <section className="container mx-auto text-center py-6 mb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Main Hero Message to sell yourself!
        </h3>
        <button
          type="button"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Action!
        </button>
      </section>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const events = await getEvents();

  return {
    props: { events },
  };
}

Home.propTypes = {
  events: PropTypes.arrayOf.isRequired,
};

export default Home;
