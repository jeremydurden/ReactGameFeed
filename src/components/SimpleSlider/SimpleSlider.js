import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ screenShots }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
