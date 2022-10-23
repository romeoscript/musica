import React,{useContext} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { MusicContext } from "../../context/Context";

import "./newrelease.scss";
// Import Swiper styles
import "swiper/css";

const Newrelease = () => {
  // console.log(props.released.id)
 const {newRelease} = useContext(MusicContext)
 

  return (
    <div className="swiper__container">
      <h2>New Releases.</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={7}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {newRelease.map((newUpdate) => {
        
          return (
            <SwiperSlide className="slider__item" key={newUpdate.id} >
             
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
