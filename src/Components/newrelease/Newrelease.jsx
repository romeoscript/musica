import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
  Rectangle17,
  Rectangle14,
  Rectangle15,
  Rectangle16,
} from "../../assets";
import "./newrelease.scss";
// Import Swiper styles
import "swiper/css";

const Newrelease = (props) => {


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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slider__item">
          <img src={Rectangle14} alt="" />
          <p className="swiper__title">
             title</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle15} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle16} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle17} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle14} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle14} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle14} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <img src={Rectangle14} alt="" />
          <p className="swiper__title">Life in a bubble</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Newrelease;
