import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaBusSimple } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

const GetBus = () => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column  align-items-center bus_details_wrapper">
        <h5 className="pt-2 w-50">
          Bus no. :
          <span className="text-start text-secondary h4"> WB74AV3964</span>
        </h5>
        <div className="d-flex justify-content-center w-100 h-100">
          <div className="w-50 content_buspath_wrapper">
            <p className="d-flex justify-content-between bg-light p-2 px-3 rounded-2 mb-0">
              <div className="">
                <span className="text-secondary px-2">Arrival</span>
                <span className="px-5 text-success">Station</span>
              </div>
              <span className="text-right text-danger">Departure</span>
            </p>
            <div class="container border rounded-3 py-1">
              <span className="bus_marker1 p-2 bg-danger rounded-circle pt-0">
                <FaBusSimple />
              </span>
              <span className="bus_marker2 p-2 bg-warning rounded-circle pt-0">
                <FaBusSimple />
              </span>
              <span className="bus_marker3 p-2 bg-success rounded-circle pt-0">
                <FaBusSimple />
              </span>
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar progress-bar-success progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin=""
                  aria-valuemax="100"
                  style={{ height: "100%" }}
                >
                  <span class="sr-only"></span>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="d-flex justify-content-between align-items-center border rounded px-3 mx-1">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="px-2 text-success">STD</span>
                    <small className="sm_font px-2">11:00 PM</small>
                  </div>
                  <div className="d-flex flex-column align-items-center mx-5">
                    <span className="px-2">Siliguri </span>
                    <small className="sm_font px-2">0.0 KM</small>
                  </div>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex flex-column align-items-center">
                  <span className="px-2">11:10 AM </span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center rounded marker_text1 w-100 px-4">
                <div className="d-flex flex-column">
                  <span className="px-2 text-success">STA</span>
                  <small className="sm_font px-2">11:00 PM</small>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex align-items-center">
                  <span className="px-2">Jalpaiguri </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center rounded marker_text2 w-100 px-4">
                <div className="d-flex flex-column">
                  <span className="px-2 text-success">STA</span>
                  <small className="sm_font px-2">11:00 PM</small>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex align-items-center">
                  <span className="px-2">Jaigaon </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetBus;
