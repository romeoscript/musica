import React from "react";
import { useParams } from "react-router-dom";

const Player = (props) => {
  const topChart = props.released;
  const params = useParams();
  console.log(topChart);
  const topPlayed = topChart.find((played) => {
    return played.id === params.musicId;
  });
  const { url, title, image } = topPlayed;
  console.log(topPlayed);
  return (
    <div className="shared__container">
      {url}
      <img src={image} alt="" />
      {title}
      {params.musicId}
    </div>
  );
};

export default Player;
