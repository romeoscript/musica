import React, { useContext } from "react";
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

import { MusicContext } from "../../context/Context";
import AudioPlayer from "react-h5-audio-player";

import "react-h5-audio-player/lib/styles.css";
import "./cta.scss";

const Cta = () => {
  const { audioQueue, trackIndex, setTrackIndex } = useContext(MusicContext);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? audioTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < audioTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  if (audioQueue.length === 0) return null;

  console.log(audioQueue)

  const audioTracks = audioQueue;
  const currentTrack = audioTracks[trackIndex];

  return (
    <section className="audio-container">
      <div className="audio-details">
        <img src={currentTrack.img} alt="" />
        <div>
          <h3>{currentTrack.title}</h3>
          <p>{currentTrack.sub}</p>
        </div>
      </div>

      <AudioPlayer
        src={currentTrack.url}
        showSkipControls
        showJumpControls={false}
        autoPlay
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        className="player"
      ></AudioPlayer>
    </section>
  );
};

export default Cta;
