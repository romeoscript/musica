import React from "react";
import "./topchart.scss";
import { Rectangle } from "../../assets";
import { Heart } from "iconsax-react";

const TopCharts = () => {
  return (
    <div className="top__chart-flex">
      {/* topcharsection */}
      <h2>Top charts</h2>
      <section className="top__charts">

        {/* this information would be fetched from an api */}
        <div className="top__chart-flex__top">
          {/* flex__item1 */}

          <div className="top__chart-text">
            <img src={Rectangle} alt="" />
            <div className="top__chart-text_content">
              <h3>Golden age of 80s</h3>
              <span>Sean swadder</span>
              <p>2:34:45</p>
            </div>
          </div>

          {/* flex__item2 */}

          <div className="heart__icon">
            <Heart size="17" color="#FACD66" variant="Outline" />
          </div>
        </div>
        <div className="top__chart-flex__top">
          {/* flex__item1 */}

          <div className="top__chart-text">
            <img src={Rectangle} alt="" />
            <div className="top__chart-text_content">
              <h3>Golden age of 80s</h3>
              <span>Sean swadder</span>
              <p>2:34:45</p>
            </div>
          </div>

          {/* flex__item2 */}

          <div className="heart__icon">
            <Heart size="17" color="#FACD66" variant="Outline" />
          </div>
        </div>
        <div className="top__chart-flex__top">
          {/* flex__item1 */}

          <div className="top__chart-text">
            <img src={Rectangle} alt="" />
            <div className="top__chart-text_content">
              <h3>Golden age of 80s</h3>
              <span>Sean swadder</span>
              <p>2:34:45</p>
            </div>
          </div>

          {/* flex__item2 */}

          <div className="heart__icon">
            <Heart size="17" color="#FACD66" variant="Outline" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCharts;
