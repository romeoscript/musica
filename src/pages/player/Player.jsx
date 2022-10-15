import React from "react";
import { useParams } from "react-router-dom";

const Player = (props) => {
  const topChart = props.released;
  const params = useParams();
console.log(topChart)
  const topPlayed = topChart.find((played) => {
    return played.id === params.musicId;
    
  });
const {url,title} = topPlayed
 
  return (<div className="shared__container">
    {url}
    {title}
    {params.musicId}
    </div>);
};

export default Player;
