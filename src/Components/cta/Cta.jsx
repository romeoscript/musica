import React from "react";
import { Rectangle14 } from "../../assets";
import {
  VolumeMute,
  Shuffle,
  Previous,
  PlayCircle,
  Next,
  RepeateOne,
} from "iconsax-react";
//  import ReactPlayer from "react-player";
// import AudioPlayer from "react-h5-audio-player";
import "./cta.scss";

const Cta = () => {
  return (
    <div className="cta__container">
      <div className="cta__container-image">
        <img src={Rectangle14} alt="" />
        <div>
          <h4>Seasons in</h4>
          <p>James</p>
        </div>
      </div>
      <div className="cta__container-audio">
        
        <div className="controls">
          <Shuffle size="20" className="controls__btn midscreen" variant="Bold" />
          <Previous size="20" className="controls__btn midscreen" variant="Bold" />
          <PlayCircle size="27" className="controls__btn play" variant="Bold" />
          <Next size="20" className="controls__btn" variant="Bold" />
          <RepeateOne size="20" className="controls__btn midscreen" variant="Bold" />
        </div>
        <input type="range" name="" id="" />
      </div>
      <div className="cta__container-volume">
        <VolumeMute size="20" color="#fff" />
        <input type="range" name="" id="" />
      </div>
      {/* <AudioPlayer
        src='romeo.mp3'
        // showSkipControls
        // showJumpControls={false}
        // autoPlay
        // onClickPrevious={handleClickPrevious}
        // onClickNext={handleClickNext}
        // onEnded={handleClickNext}
        className="player"
      ></AudioPlayer> */}
    </div>
  );
};

export default Cta;
