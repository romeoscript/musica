import React from "react";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import "./cta.scss";

const Cta = () => {
  return (
    <div className="cta__container">
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
