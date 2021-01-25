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
    <Slider {...settings}>
      {screenShots.results.map((picture) => (
        <img
          style={{ width: "40vh", height: "auto" }}
          key={picture.id}
          src={picture.image}
          alt="screen shot"
        />
      ))}
    </Slider>
  );
}
