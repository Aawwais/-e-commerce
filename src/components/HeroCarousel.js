"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function HeroCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: true,
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {props.images.map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HeroCarousel;
