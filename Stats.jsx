// Stats.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stats.css';
import CountsImg from '../../components/stats/counts-img.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";

const Stats = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container flex-container">
      <div className="image-container">
        <img src={CountsImg} alt="Your Image" />
      </div>
      <div className="paragraphs-container">
        <h1 className="header">Happy Customers</h1>
        <Slider {...sliderSettings}>
          <div>
            <div className="first wide-container">
              <i className="bi bi-emoji-smile"></i>
              <p className="happy-clients"><strong>Happy Clients</strong></p>
              <i className="bi bi-journal-richtext"></i>
              <p className="projects"><strong>Projects</strong></p>
            </div>
          </div>
          <div>
            <div className="second wide-container">
              <i className="bi bi-clock"></i>
              <p className="experience"><strong>Years of experience</strong></p>
              <i className="bi bi-award"></i>
              <p className="awards"><strong>Awards</strong></p>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Stats;
