import { PlayCircle, MusicSquareAdd, Heart } from "iconsax-react";
import React from "react";
import { useParams } from "react-router-dom";
import "./Player.scss";
import PlayerAlbum from "./PlayerAlbum";

const Player = (props) => {
  const topChart = props.released;
  const params = useParams();
  const topPlayed = topChart.find((played) => {
    return played.id === params.musicId;
  });
  const { url, title, image } = topPlayed;
  console.log(topPlayed);
  return (
    <div className="shared__container player__container">
      <div className="player__image-container">
        <img src={image} alt="" />
      </div>

      <div className="music__tunes">
        <div className="music__tunes-image">
          <img src={image} alt="" />
        </div>
        <div className="music__tunes-text">
          <section className="music__select">
            <h2> {title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p>64 songs ~ 16 hrs+</p>
          </section>
          <section className="music__tunes-play__section">
            <div className="play">
              {" "}
              <PlayCircle size="20" color="#FACD66" variant="Bold" />{" "}
              <p>Play all</p>
            </div>
            <div className="add__collection">
              <MusicSquareAdd size="20" color="#FACD66" variant="Bold" />
              <p>Add to collection</p>
            </div>
            <div className="heart__section">
              <Heart size="20" color="#E5524A" variant="Bold" />
            </div>
          </section>
        </div>
      </div>
      {/* music tunes ends here */}
      <PlayerAlbum />
      {url}

     
      {params.musicId}
    </div>
  );
};

export default Player;
