import React,{useState} from "react";
import TopCharts from "../../Components/topChart/TopCharts";
import { Humanboy, frame, love } from "../../assets";
import { motion } from "framer-motion";
import Newrelease from "../../Components/newrelease/Newrelease";

const HomePage = () => {
const [newRelease, setNewRelease] = useState('')

function fetchAudio(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2af34e5f2amsh30aa2a4db3d4787p186977jsn1db94398f502',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(data => {
      const transformedMovies = data.map(audioData => {
        return{
          id:audioData.key,
          title:audioData.title,
          image:audioData.images.coverart,
        }
      })
      setNewRelease(transformedMovies)
      // console.log(transformedMovies)
    })
   
    .catch(err => console.error(err));
  
}

  return (
    <div className="shared__container">
      <div className="shared__container-flex">
        <div className="shared__container-flex__item">
          {/* shared container text section */}
          <div className="shared__container-flex__text">
            <p>Currated playlist</p>
            <section>
              <h1>R & B Hits</h1>
              <button onClick={fetchAudio}>clik</button>
              <p>
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </section>
            <div className="shared__container-people-image">
              <img src={frame} alt="" />
              <p className="ptag">
                {" "}
                <span>
                  {" "}
                  <img src={love} alt="" />{" "}
                </span>{" "}
                33k Likes
              </p>
            </div>
          </div>
          {/* human boy image */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={Humanboy}
            className="humanbg"
            alt="humanbg"
          />
        </div>
        <TopCharts />
      </div>
      <Newrelease released={newRelease}/>
    </div>
  );
};

export default HomePage;
