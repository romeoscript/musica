import React from "react";
import "./topchart.scss";
import { Link } from "react-router-dom";
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
            <div className="top__chart-flex__top" key={updated.id}>
              <Link to={`/player/${updated.id}`}>
                <div className="top__chart-text">
                  <img src={updated.image} alt="" />
                  <div className="top__chart-text_content">
                    <h3>{updated.title}</h3>
                    <span>{updated.sub}</span>
                    <p>2:34:45</p>
                  </div>
                </div>
              </Link>
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
