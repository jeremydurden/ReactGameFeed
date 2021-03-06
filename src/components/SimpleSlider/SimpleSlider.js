import React from "react";
import Slider, { dots } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { smallImage } from "../../utils/gameService";

export default function SimpleSlider({ screenShots }) {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    adaptiveHeight: true,
  };
  return (
    <>
      {screenShots ? (
        <Slider {...settings}>
          {screenShots.results.map((picture) => (
            <img
              key={picture.id}
              src={smallImage(picture.image, 1280)}
              alt="screen shot"
            />
          ))}
        </Slider>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
