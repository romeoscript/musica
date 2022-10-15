import React,{useState,useEffect}  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home.scss";
import HomePage from "./HomePage";
import Collections from "../Collections/Collections";
import Player from "../player/Player";
import Trending from "../trending/Trending";
import Sidebar from "../../Components/sidebar/Sidebar";
// import Cta from "../../Components/cta/Cta";

const Home = () => {

  const [newRelease, setNewRelease] = useState([])

function fetchAudio(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2af34e5f2amsh30aa2a4db3d4787p186977jsn1db94398f502',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
    .then(response  => response.json() )
   
    .then(data => { 
      // console.log(data.tracks.albumId)
      console.log(data.tracks)
      const transformedMovies = data.tracks.map(audioData => {
        return{
          id:audioData.albumId,
          title:audioData.name,
          // image:audioData.images.coverart,
          url:audioData.previewURL,
        }
      })
      setNewRelease(transformedMovies)
      console.log(transformedMovies)
    })
   
    .catch(err => console.error(err));
  
}
useEffect(() => {
  fetchAudio()
}, [])
  return (
    <BrowserRouter>
      <div className="main__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage released={newRelease}/>} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/player/:musicId" element={<Player released={newRelease}/>} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        {/* <Cta /> */}
      </div>
    </BrowserRouter>
  );
};

export default Home;
