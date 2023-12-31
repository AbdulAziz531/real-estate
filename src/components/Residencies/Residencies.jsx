import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/Common";
const Residencies = () => {
  return (
    <section className="residencies-wrapper">
      <div className="paddings innerWidth residencies.container">
        <div className="residencies-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart residencies-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText residencies.price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr />
    </section>
  );
};

export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter residencies-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
