import React from "react";
import ProfilePic from "../Assets/user.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper ">
      <div className="work-section-top ">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Explore the tales of our happy travelers! Read about their firsthand
          experiences and glowing testimonials from those who have journeyed
          with us
        </p>
      </div>
      <div className="testimonials d-flex justify-content-center aligh-items-center">
        <div className="testimonial-section-bottom bg-light">
          <img src={ProfilePic} className="profile-image" alt="" />
          <p>
            " As a daily traveler, Road Radar has truly simplified my life.The
            interface is so user-friendly..."
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5 className="mt-1">USER1</h5>
        </div>
        <div className="testimonial-section-bottom bg-light">
          <img src={ProfilePic} className="profile-image" alt="" />
          <p>
            " Thanks to Road Radar! Waiting for buses is a thing of the past. It
            is a lifesaver - it's like having a personal assistant for my daily
            traveling."
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5 className="mt-1">USER2</h5>
        </div>
        <div className="testimonial-section-bottom bg-light">
          <img src={ProfilePic} className="profile-image" alt="" />
          <p>
            " Thanks to Road Radar! Waiting for buses is a thing of the past. It
            is a lifesaver - it's like having a personal assistant for my daily
            traveling."
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5 className="mt-1">USER2</h5>
        </div>
        <div className="testimonial-section-bottom bg-light">
          <img src={ProfilePic} className="profile-image" alt="" />
          <p>
            " Efficiency at its best! It has truly transformed the way I travel,
            providing a hassle-free and punctual experience"
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h5 className="mt-1">USER3</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
