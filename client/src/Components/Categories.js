import React from "react";
import Delhi from "../Assets/Delhi.jpg";
import Kolkata from "../Assets/kolkata.png";
import Sikkim from "../Assets/Sikkim.png";
import Assam from "../Assets/Assam.png";
import NorthBengal from "../Assets/NB.png";

const Work = () => {
  const workInfoData = [
    {
      image: Delhi,
      title: "Delhi",
      // text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, accusantium?",
    },
    {
      image: Kolkata,
      title: "Kolkata",
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
    {
      image: Assam,
      title: "Assam",
      // text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cities</p>
        <h4 className="primary-heading">List of Cities</h4>
        <p className="primary-text">
          Discover our handpicked cities, each offering special charm and
          exciting adventures.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} className="cities-logo" alt="" />
            </div>
            <h4 className="mt-2">{data.title}</h4>
            {/* <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
