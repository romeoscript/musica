import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home.scss";
import HomePage from "./HomePage";
import Collections from "../Collections/Collections";
import Player from "../player/Player";
import Trending from "../trending/Trending";
import Sidebar from "../../Components/sidebar/Sidebar";

import Cta from "../../Components/cta/Cta";
import Navbar from "../../Components/navbar/Navbar";

const Home = () => {
  const [newRelease, setNewRelease] = useState([]);
  

  function fetchAudio() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3b68a0e148mshe3db36ded1779fcp119a09jsn4947aa0d4692",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
      .then((response) => response.json())

      .then((data) => {
        const transformedMovies = [];
        data.forEach(audioData => {
               if(!audioData.images) return null
           
            transformedMovies.push({
              id: audioData.key,
              title: audioData.title,
              sub: audioData.subtitle,
              image:audioData.images.coverart,
              img:audioData.images.background,
              url:audioData.hub.actions[1].uri,

            }) 
        });
        setNewRelease(transformedMovies)
        console.log(transformedMovies[0])
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchAudio();
  }, []);

  return (
    <BrowserRouter>
    <Navbar />
      <div className="main__body">
      
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage released={newRelease} />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/player/:musicId"
            element={<Player released={newRelease} />}
          />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a"></audio>
        <Cta />
      </div>

    </BrowserRouter>
  );
};

export default Home;
