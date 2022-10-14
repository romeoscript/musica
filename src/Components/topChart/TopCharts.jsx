import React from "react";
import "./topchart.scss";
import { Rectangle } from "../../assets";
import { Heart } from "iconsax-react";

const TopCharts = (props) => {
  const topChart = props.released;

  return (
    <div className="top__chart-flex">
      {/* topcharsection */}
      <h2>Top charts</h2>
      <section className="top__charts">
        {/* this information would be fetched from an api */}

        {/* flex__item1 */}
        {topChart.map((updated) => {
          return (
            <div className="top__chart-flex__top">
              <div className="top__chart-text">
                <img src={updated.image} alt="" />
                <div className="top__chart-text_content">
                  <h3>{updated.title}</h3>
                  <span>Sean swadder</span>
                  <p>2:34:45</p>
                </div>
              </div>

              <div className="heart__icon">
                <Heart size="17" color="#FACD66" variant="Outline" />
              </div>
            </div>
          );
        })}

       
        
       
      </section>
    </div>
  );
};

export default TopCharts;
