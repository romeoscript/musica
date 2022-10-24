import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home.scss";
import HomePage from "./HomePage";
import Collections from "../Collections/Collections";
import Player from "../player/Player";
import Trending from "../trending/Trending";
import Sidebar from "../../Components/sidebar/Sidebar";
import Cta from "../../Components/cta/Cta";
import Navbar from "../../Components/navbar/Navbar";
import { MusicContext } from "../../context/Context";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/player/:musicId" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a"></audio>
        <Cta />
      </div>
    </BrowserRouter>
  );
};

export default Home;
