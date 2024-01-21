import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaArrowRight } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

const GetBus = () => {
  const [busDetails, setBusDetails] = useState(null);
  const busno = localStorage.getItem("busno");

  useEffect(() => {
    // Fetch the bus details only if it's not already available
    // if (!busDetails) {
    //   axios
    //     .post("/api/auth/getbus", { source: source }) // replace with an actual bus number
    //     .then((response) => {
    //       setBusDetails(response.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    if (!busDetails) {
      axios
        .post("/api/auth/getbus", { busno: busno }) // replace with an actual bus number
        .then((response) => {
          setBusDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
        <h2>Bus Details</h2>
        <div className="border-shadow d-flex align-items-center bg-light mb-3 w-50 h-25 p-3 rounded-4">
          <div className="d-flex justify-content-center align-items-center w-25">
            <FaBusAlt size={50} />
          </div>
          {busDetails && (
            <div className="d-flex flex-column ustify-content-center border bg-white rounded-4 h-100 w-75">
              <p className="px-5 mt-2">
                <strong>{busDetails.busno}</strong>
              </p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between align-items-center px-5 w-100">
                  <h5 className="fw-bold">{busDetails.source}</h5>
                  <FaArrowRight />
                  <h5 className="fw-bold">{busDetails.destination}</h5>
                </div>
                <div className="d-flex flex-column px-5">
                  <p className="m-0">
                    Via: <strong>{busDetails.via}</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                  <div className="d-flex">
                    <div className="d-flex flex-column px-5">
                      <p className="m-0 fw-bold">STA</p>
                      <p className="m-0">{busDetails.sta}</p>
                    </div>
                    <div className="d-flex flex-column px-2">
                      <p className="m-0 fw-bold">ETA</p>
                      <p className="m-0">{busDetails.sta}</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column px-2">
                      <p className="m-0 fw-bold">STC</p>
                      <p className="m-0">{busDetails.stc}</p>
                    </div>
                    <div className="d-flex flex-column px-5">
                      <p className="m-0 fw-bold">ETC</p>
                      <p className="m-0">{busDetails.stc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-shadow d-flex align-items-center bg-light w-50 h-25 p-3 rounded-4">
          <div className="d-flex justify-content-center align-items-center w-25">
            <FaBusAlt size={50} />
          </div>
          {busDetails && (
            <div className="d-flex flex-column ustify-content-center border bg-white rounded-4  h-100 w-75">
              <p className="px-5 mt-2">
                <strong>{busDetails.busno}</strong>
              </p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between align-items-center px-5 w-100">
                  <h5 className="fw-bold">{busDetails.destination}</h5>
                  <FaArrowRight />

                  <h5 className="fw-bold">{busDetails.source}</h5>
                </div>
                <div className="d-flex flex-column px-5">
                  <p className="m-0">
                    Via: <strong>{busDetails.via}</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                  <div className="d-flex">
                    <div className="d-flex flex-column px-5">
                      <p className="m-0 fw-bold">STA</p>
                      {/* <p className="m-0">{busDetails.sta}</p> */}
                      <p className="m-0">NaN</p>
                    </div>
                    <div className="d-flex flex-column px-2">
                      <p className="m-0 fw-bold">ETA</p>
                      {/* <p className="m-0">{busDetails.sta}</p> */}
                      <p className="m-0">NaN</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column px-2">
                      <p className="m-0 fw-bold">STC</p>
                      {/* <p className="m-0">{busDetails.stc}</p> */}
                      <p className="m-0">NaN</p>
                    </div>
                    <div className="d-flex flex-column px-5">
                      <p className="m-0 fw-bold">ETC</p>
                      {/* <p className="m-0">{busDetails.stc}</p> */}
                      <p className="m-0">NaN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetBus;
