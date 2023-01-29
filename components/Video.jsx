import React from "react";
import poster from '../public/img/poster01.png';

const Video = () => {
  return(
    <section className="relative pt-20 bg-white">
      <div className="flex justify-center lg:w-3/5 px-5 lg:px-0 m-auto">
        <video 
          className="video-js"
          controls
          autoPlay 
          loop 
          src={require('../public/img/video.mp4')}
          poster={poster.src}
        >
          <source  src={require('../public/img/video.mp4')} />
        </video>
      </div>
    </section>
  );
}

export default Video;