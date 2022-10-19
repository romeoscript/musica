import React from "react";
import { Rectangle16 } from "../../assets";
import { Heart, More } from "iconsax-react";

const PlayerAlbum = () => {
  return (
    <section className="player__album-section">
      <div className="player__album">
        <div className="player__album-second">
          <span className="album__dp">
            <img src={Rectangle16} alt="" />
            <Heart size="20" color="white" variant="transparent" />
          </span>
          <p>Let me love you ~ Krisx</p>
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
