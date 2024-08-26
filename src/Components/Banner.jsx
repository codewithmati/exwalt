import React from "react";
import PropTypes from "prop-types";

const Banner = ({ images, speed = 10000 }) => {
  return (
    <div className="relative w-full overflow-hidden h-20 mask-gradient justify-center items-center">
      <div className="absolute flex justify-between lg:mx-24">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="justify-center items-center" key={id}>
              <img
                src={image}
                alt={id}
                className="mx-16 px-16 h-8 transition-all duration-300 ease-in-out hover:filter hover:grayscale hover:brightness-0"
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="justify-center items-center" key={id}>
              <img
                src={image}
                alt={id}
                className="mx-16 px-16 h-8 transition-all duration-300 ease-in-out hover:filter hover:grayscale hover:brightness-0"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

Banner.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  speed: PropTypes.number,
};

export { Banner };
