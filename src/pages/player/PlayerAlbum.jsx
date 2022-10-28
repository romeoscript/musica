import React from "react";
import { Heart, More } from "iconsax-react";

const PlayerAlbum = (props) => {
  return (
    <section className="player__album-section">
      <div className="player__album">
        <div className="player__album-second">
          <span className="album__dp">
            <img src={props.image} alt="" />
            <Heart size="20" color="white" variant="transparent" />
          </span>
          <p>{props.title} ~ {props.sub}</p>
          <p>Single</p>

          <p>4:17</p>
          <p>
            <More size="20" color="#FACD66" className="more"/>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayerAlbum;
