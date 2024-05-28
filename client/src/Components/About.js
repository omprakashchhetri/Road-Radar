import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-us-red.gif";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="py-5">
      <div className="about-section-container ">
        {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
        <p className="primary-subheading">About</p>
        <div className="about-section">
          <div className="about-section-image-container d-flex justify-content-center">
            <img src={AboutBackgroundImage} alt="About us" width="500" />
          </div>
          <div className="about-section-text-container">
            <h3 className="primary-heading">What Are We?</h3>
            <p className="primary-text about-content">
              Welcome to Road Radar! We're transforming your travel experience
              with our state-of-the-art public bus tracking system.
            </p>
            <p className="primary-text about-content">
              Our journey started with a simple yet powerful idea: to make
              traveling more efficient and reliable, so you can plan your
              journey with peace of mind.
            </p>
            <div className="about-button-container">
              <button className="secondary-button p-3 px-3">Learn More</button>
              {/* <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Watch Video
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
