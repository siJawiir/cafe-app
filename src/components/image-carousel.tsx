import React from "react";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselImageProps {
  images: string[];
}

const CarouselImage: React.FC<CarouselImageProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img
              src={image}
              alt="banner"
              className="w-full max-h-64 object-contain -mb-2"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute -bottom-8 right-0">
          <button className="px-4 py-2 rounded-full text-blue-400 flex justify-center items-center hover:text-blue-600">
            View All <MdArrowForwardIos className="ml-1 text-gray-600" />
          </button>
      </div>
    </div>
  );
};

export default CarouselImage;
