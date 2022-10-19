import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "./newrelease.scss";
// Import Swiper styles
import "swiper/css";

const Popular = (props) => {
  // console.log(props.released.id)
  const update = props.released;
  return (
    <div className="swiper__container">
      <h2>Popular in your area</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={7}
        slidesPerGroup={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {update.map((newUpdate) => {
         
          return (
            <SwiperSlide
              className="slider__item"
              key={newUpdate.id}
             

            >
              <img src={newUpdate.img} alt="" />
              <p className="swiper__title">{newUpdate.title} </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Popular;
