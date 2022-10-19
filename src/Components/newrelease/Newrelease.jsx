import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "./newrelease.scss";
// Import Swiper styles
import "swiper/css";

const Newrelease = (props) => {
  // console.log(props.released.id)
  const update = props.released;
 

  return (
    <div className="swiper__container">
      <h2>New Releases.</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={7}
        slidesPerGroup={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {update.map((newUpdate) => {
           const song = new Audio(newUpdate.url)
        
          return (
            <SwiperSlide className="slider__item" key={newUpdate.id} onClick={song.play}>
             
              <img src={newUpdate.image} alt="" />
              <p className="swiper__title">{newUpdate.title} </p>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </div>
  );
};

export default Newrelease;
