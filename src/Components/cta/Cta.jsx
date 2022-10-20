import React from "react";
import { Rectangle14 } from "../../assets";
 import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
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

       <AudioPlayer
        src='romeo.mp3'
        // showSkipControls
        // showJumpControls={false}
        // autoPlay
        // onClickPrevious={handleClickPrevious}
        // onClickNext={handleClickNext}
        // onEnded={handleClickNext}
        className="player"
      ></AudioPlayer>
    </div>
  );
};

export default Cta;
