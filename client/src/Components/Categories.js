import React from "react";
import Bihar from "../Assets/bihar.jpg";
import Sikkim from "../Assets/sikkim.png";
import NorthBengal from "../Assets/kolkata.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Bihar,
      title: "Bihar",
      // text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      image: NorthBengal,
      title: "North Bengal",
      // text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      image: Sikkim,
      title: "Sikkim",
      // text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div id="cityList" className="py-5">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Cities</p>
          <h4 className="primary-heading">List of Cities</h4>
          <p className="primary-text">
            Discover our handpicked cities, each offering special charm and
            exciting adventures.
          </p>
        </div>
        <div className="work-section-bottom d-flex align-items-center">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} className="cities-logo" alt="" />
              </div>
              <h4 className="mt-2">{data.title}</h4>
              {/* <p>{data.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
