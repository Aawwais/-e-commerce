"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function HeroCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.images.map((items, index) => {
          return (
            <div key={index}>
              <Image
                src={items.image}
                sizes="100vw"
                height="100%"
                width="100%"
                className="w-full"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HeroCarousel;
