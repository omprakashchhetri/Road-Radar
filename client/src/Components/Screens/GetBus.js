import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { FaArrowRight } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

const GetBus = () => {
  const [busDetails, setBusDetails] = useState(null);
  const busno = localStorage.getItem("busno");
  const source = localStorage.getItem("source");
  const destination = localStorage.getItem("destination");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        let response;
        if (busno) {
          response = await axios.post("/api/auth/getbus", { busno });
        } else if (source && destination) {
          response = await axios.post("/api/auth/getbusbysource", {
            source,
            destination,
          });
        }

        if (response) {
          console.log("Response received:", response); // Log entire response
          console.log("Response data:", response.data); // Log response data
          setBusDetails(response.data);
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchBusDetails();
  }, [busno, source, destination]);
  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert '0' hours to '12'
    return `${hours}:${minutes} ${period}`;
  };

  const goToBusRoute = (busno) => {
    navigate(`/busroute/${busno}`);
  };
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center bus_details_wrapper">
        <h2 className="pt-2">
          BUS <span className="text-primary">LIST</span>
        </h2>
        <div className="d-flex flex-column align-items-center bus_details_body p-3 rounded-4">
          <div className="d-flex flex-column align-items-center  py-3 bg-white w-100 h-100">
            {busDetails ? (
              busDetails.map((bus, index) => (
                <div
                  key={index}
                  className="border-shadow d-flex align-items-center bg-light mb-3  cart_body p-3 rounded-4"
                  onClick={() => goToBusRoute(bus.busno)}
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
                        <div className="d-flex justify-content-center align-items-center w-50">
                          <div className="d-flex px-5">
                            <p className="m-0 fw-bold">STD -</p>
                            <p className="m-0 mx-1">
                              {convertTo12HourFormat(bus.sta)}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50">
                          <div className="d-flex px-2">
                            <p className="m-0 fw-bold">STC - </p>
                            <p className="m-0 mx-1">
                              {convertTo12HourFormat(bus.stc)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <HashLoader color="#017cff" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetBus;
