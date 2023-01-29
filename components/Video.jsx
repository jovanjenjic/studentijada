import React from "react";

const Video = () => {
  return(
    <section className="relative pt-20 bg-white">
      <div className="flex justify-center">
        <video controls autoplay loop src={require('../public/img/video.mp4')} >
          <source src={require('../public/img/video.mp4')} />
        </video>
      </div>
    </section>
  );
}

export default Video;