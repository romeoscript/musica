import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home.scss";
import HomePage from "./HomePage";
import Collections from "../Collections/Collections";
import Player from "../player/Player";
import Trending from "../trending/Trending";
import Sidebar from "../../Components/sidebar/Sidebar";
import Cta from "../../Components/cta/Cta";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="main__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Cta />
      </div>
    </BrowserRouter>
  );
};

export default Home;
