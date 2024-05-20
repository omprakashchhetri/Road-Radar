import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerBackground from "../Assets/city-bus-logo-red.gif";
import { FiArrowRight } from "react-icons/fi";
import { FaCircleDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import axios from "axios";

const Home = () => {
  const [busno, setBusno] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const findHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (busno !== "" && source === "" && destination === "") {
      try {
        const response = await axios.post(
          "/api/auth/getbus",
          { busno },
          config
        );
        if (response.status >= 200 && response.status < 300) {
          localStorage.setItem("busno", busno);
          localStorage.removeItem("source");
          localStorage.removeItem("destination");
          navigate("/getbus");
        } else {
          setError("Failed. Please try again.");
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching bus information:", error.message);
        setError("Bus Details Not Found!");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else if (busno === "" && source !== "" && destination !== "") {
      try {
        const response = await axios.post(
          "/api/auth/getbusbysource",
          { source, destination },
          config
        );
        if (response.status >= 200 && response.status < 300) {
          localStorage.removeItem("busno");
          localStorage.setItem("source", source);
          localStorage.setItem("destination", destination);
          navigate("/getbus");
        } else {
          setError("Failed. Please try again.");
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching bus information:", error.message);
        setError("Bus Details Not Found!");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else {
      setError("Please provide either bus number or source and destination.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const capitalize = {
    textTransform: "capitalize",
  };

  return (
    <div className="home-container">
      <div className="home-banner-container pt-5 d-flex justify-content-between align-items-center w-100">
        <div className="home-bannerImage-container d-flex justify-content-center align-items-center">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="search-box d-flex flex-column justify-content-center align-items-center rounded-5 p-5 py-5">
          {error && <span className="error-message rounded-3">{error}</span>}
          <form onSubmit={findHandler} className="w-100">
            <div className="form-group">
              <label htmlFor="number">
                <p className="h6 fw-bold">
                  <FaBus className="mx-1 mb-1" />
                  Bus no.:
                </p>
              </label>
              <input
                type="text"
                id="number"
                placeholder="Enter bus no."
                value={busno.toUpperCase()}
                readOnly={source !== "" || destination !== ""}
                onChange={(e) => {
                  setBusno(e.target.value);
                  if (e.target.value !== "") {
                    setSource("");
                    setDestination("");
                  }
                }}
                tabIndex={1}
              />
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <strong>OR</strong>
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="from">
                <p className="h6 fw-bold">
                  <FaCircleDot className="mx-1 mb-1" />
                  From:
                </p>
              </label>
              <input
                type="text"
                id="from"
                placeholder="Enter your source"
                value={source}
                readOnly={busno !== ""}
                onChange={(e) => {
                  setSource(e.target.value);
                  if (e.target.value !== "") {
                    setBusno("");
                  }
                }}
                tabIndex={2}
                style={capitalize}
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">
                <p className="h6 fw-bold">
                  <FaLocationDot size={20} className="mx-1 mb-1" />
                  To:
                </p>
              </label>
              <input
                type="text"
                id="to"
                placeholder="Enter the destination"
                value={destination}
                readOnly={busno !== ""}
                onChange={(e) => {
                  setDestination(e.target.value);
                  if (e.target.value !== "") {
                    setBusno("");
                  }
                }}
                tabIndex={3}
                style={capitalize}
              />
            </div>
            <button type="submit" className="secondary-button w-100">
              Find Buses <FiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
