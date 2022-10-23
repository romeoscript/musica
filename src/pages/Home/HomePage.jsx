import React from "react";
import TopCharts from "../../Components/topChart/TopCharts";
import { Humanboy, frame, love } from "../../assets";
import { motion } from "framer-motion";
import Newrelease from "../../Components/newrelease/Newrelease";
import Popular from "../../Components/newrelease/Popular";



const HomePage = ({released}) => {


  return (
    <div className="shared__container">
      <div className="shared__container-flex">
        <div className="shared__container-flex__item">
          {/* shared container text section */}
          <div className="shared__container-flex__text">
            <p>Currated playlist</p>
            <section>
              <h1>R & B Hits</h1>
           
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
      <Newrelease/>
      <Popular/>
    </div>
  );
};

export default HomePage;
