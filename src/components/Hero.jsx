import ObjectSvg from "./ObjectSvg";
import grain from "../assets/grain.svg";
import { MusicContext } from "../contexts/MusicContext";
import { useContext } from "react";

import artist from "../assets/Cruel-Santino.png";
import likes from "../assets/hero-likes.png";

const Hero = () => {
  const { hero } = useContext(MusicContext);

  if (hero)
    return (
      <div className="hero">
        <ObjectSvg data={grain} customClass="grain" />
        <div className="content">
          <p>Curated Playlist</p>
          <div className="details">
            
              <h1>  R & B Hits</h1>
          
          

            <p>
            All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more
            </p>
          </div>
          <img src={likes} alt="Hero Likes" />
        </div>
        <img src={artist} alt="Alte Artist" className="cover" />
      </div>
    );
};

export default Hero;
