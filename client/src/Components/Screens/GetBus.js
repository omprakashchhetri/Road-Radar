import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaArrowRight } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

const GetBus = () => {
  const [busDetails, setBusDetails] = useState(null);
  // const busno = localStorage.getItem("busno");
  const source = localStorage.getItem("source");
  const destination = localStorage.getItem("destination");

  useEffect(() => {
    // Fetch the bus details only if it's not already available
    if (!busDetails && source && destination) {
      axios
        .post("/api/auth/getbusbysource", {
          source: source,
          destination: destination,
        })
        .then((response) => {
          console.log("Response received:", response); // Log entire response
          console.log("Response data:", response.data); // Log response data
          setBusDetails(response.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
    // eslint-disable-next-line
  }, [source, destination, busDetails]);

  // useEffect(() => {
  //   // Fetch the bus details only if it's not already available
  //   if (!busDetails && busno) {
  //     axios
  //       .post("/api/auth/getbus", {
  //         busno: busno,
  //       })
  //       .then((response) => {
  //         console.log("Response received:", response); // Log entire response
  //         console.log("Response data:", response.data); // Log response data
  //         setBusDetails(response.data);
  //       })
  //       .catch((err) => {
  //         console.log("Error:", err);
  //       });
  //   }
  //   // eslint-disable-next-line
  // }, []);
  // console.log(busDetails);
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column  align-items-center  bus_details_wrapper">
        <h2>Bus Details</h2>
        <div className="d-flex flex-column align-items-center bus_details_body py-3">
          {busDetails ? (
            busDetails.map((bus, index) => (
              <div
                key={index}
                className="border-shadow d-flex align-items-center bg-light mb-3 cart_body p-3 rounded-4"
              >
                <div className="d-flex justify-content-center align-items-center w-25">
                  <FaBusAlt size={50} />
                </div>
                <div className="d-flex flex-column justify-content-center border bg-white rounded-4 h-100 w-75 pb-2">
                  <p className="px-5 mt-2">
                    <strong>{bus.busno}</strong>
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex justify-content-between align-items-center px-5 w-100">
                      <h5 className="fw-bold">{bus.source}</h5>
                      <FaArrowRight />
                      <h5 className="fw-bold">{bus.destination}</h5>
                    </div>
                    <div className="d-flex flex-column px-5">
                      <p className="m-0">
                        Via: <strong>{bus.via}</strong>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2 w-100">
                      <div className="d-flex">
                        <div className="d-flex flex-column px-5">
                          <p className="m-0 fw-bold">STA</p>
                          <p className="m-0">{bus.sta}</p>
                        </div>
                        <div className="d-flex flex-column px-2">
                          <p className="m-0 fw-bold">ETA</p>
                          <p className="m-0">{bus.sta}</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex flex-column px-2">
                          <p className="m-0 fw-bold">STC</p>
                          <p className="m-0">{bus.stc}</p>
                        </div>
                        <div className="d-flex flex-column px-5">
                          <p className="m-0 fw-bold">ETC</p>
                          <p className="m-0">{bus.stc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetBus;
