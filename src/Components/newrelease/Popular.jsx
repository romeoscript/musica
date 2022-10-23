import React,{useContext} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "./newrelease.scss";
// Import Swiper styles
import "swiper/css";
import { MusicContext } from "../../context/Context";

const Popular = () => {
  // console.log(props.released.id)
  const {newRelease} = useContext(MusicContext)
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
        {newRelease.map((newUpdate) => {
         
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
