import React from "react";
import PropTypes from "prop-types";

function Carousel({ images, dark = false, hideNavigation = false }) {
  return (
    <div
      id="carouselExampleCaptions"
      className={`h-full carousel slide carousel-fade relative ${
        dark ? "carousel-dark" : ""
      }`}
      data-bs-ride="carousel"
    >
      {!hideNavigation && (
        <div className="hidden lg:flex z-20 mb-32 carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index.toString()}
              className={index === 0 && "active"}
              aria-current={index === 0 && "true"}
              aria-label="Slide 1"
            />
          ))}
        </div>
      )}

      <div className="carousel-inner relative w-full overflow-hidden h-full">
        {images.map((img, index) => (
          <div
            key={img.src}
            className={`carousel-item ${
              index === 0 && "active"
            } relative float-left w-full h-full`}
          >
            <img
              src={img.src}
              className="block w-full h-full object-cover"
              alt="Motorbike Smoke"
            />
          </div>
        ))}
      </div>

      <button
        className="z-20 carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="z-20 carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf.isRequired,
  dark: PropTypes.bool,
  hideNavigation: PropTypes.bool.isRequired,
};

Carousel.defaultProps = {
  dark: false,
};

export default Carousel;
