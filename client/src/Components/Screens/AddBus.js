import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Navbar from "../Navbar";
// import ViewBus from "../Screens/ViewBus";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
const AddBus = () => {
  const [busno, setBusNo] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [viaDistance, setViaDistance] = useState("");
  const [destinationDistance, setDestinationDistance] = useState("");
  const [via, setVia] = useState("");
  const [sta, setSta] = useState("");
  const [viaSta, setViaSta] = useState("");
  const [stc, setStc] = useState("");
  const [mapid, setMapid] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const AddToast = () => {
    toast.success("Success", { duration: 2000 });
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const busHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/auth/addbus",
        {
          busno,
          source,
          destination,
          via,
          sta,
          viaSta,
          stc,
          viaDistance,
          destinationDistance,
          mapid,
        },
        config
      );
      if (response.status >= 200 && response.status < 300) {
        // If successful
        console.log("In");
        AddToast();
        window.location.reload();
      } else {
        // Handle server response error
        setError("Failed. Please try again.");
      }
    } catch (e) {
      // Handle network or unexpected errors
      setError(
        error.response?.data?.error || "An error occurred during adding."
      );
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Bus No. already exist");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center pt-5 w-100 ">
        <div className="addbus d-flex flex-column justify-content-center align-items-center bg-light p-2 pt-3 rounded-5">
          <h1>
            ADD <span className="text-primary">BUS</span>
          </h1>
          <form onSubmit={busHandler} className=" w-100 p-3" action="">
            {error && <span className="error-message">{error}</span>}
            <div className="d-flex">
              <div className="m-2 mx-3 w-50">
                <div className="form-group ">
                  <label htmlFor="busno">
                    <p className="h6 fw-bold">Bus no.:</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="busno"
                    placeholder="Enter bus no."
                    value={busno}
                    onChange={(e) => {
                      setBusNo(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="from">
                    <p className="h6 fw-bold">Source:</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="from"
                    placeholder="Enter your source"
                    value={source}
                    onChange={(e) => {
                      setSource(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="to">
                    <p className="h6 fw-bold">Destination:</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="to"
                    placeholder="Enter the destination"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>
              </div>
              <div className="m-2 mx-3 w-50">
                <div className="form-group">
                  <label htmlFor="to">
                    <p className="h6 fw-bold">Via:</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="to"
                    placeholder="Enter Via"
                    value={via}
                    onChange={(e) => {
                      setVia(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="to">
                    <p className="h6 fw-bold">Distance:</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="to"
                    placeholder="Enter Via Distance:"
                    value={viaDistance}
                    onChange={(e) => {
                      setViaDistance(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="to">
                    <p className="h6 fw-bold">Distance::</p>
                  </label>
                  <input
                    type="text"
                    required
                    id="to"
                    placeholder="Enter Destination Distance"
                    value={destinationDistance}
                    onChange={(e) => {
                      setDestinationDistance(e.target.value);
                    }}
                    tabIndex={1}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex m-2 mx-3">
              <div className="form-group d-flex align-items-center mt-3 mx-1">
                <label htmlFor="sta">
                  <p className="h6 m-0 fw-bold">STA:</p>
                </label>
                <input
                  type="time"
                  required
                  id="sta"
                  placeholder="Enter the Arrival Time"
                  value={sta}
                  onChange={(e) => {
                    setSta(e.target.value);
                  }}
                  tabIndex={1}
                />
              </div>
              <div className="form-group d-flex align-items-center mt-3 mx-1 ">
                <label htmlFor="viaSta">
                  <p className="h6 fw-bold m-0">STA Via:</p>
                </label>
                <input
                  type="time"
                  className="cstm_inp_wdt"
                  required
                  id="viaSta"
                  placeholder="Enter the Arrival Time"
                  value={viaSta}
                  onChange={(e) => {
                    setViaSta(e.target.value);
                  }}
                  tabIndex={1}
                />
              </div>
              <div className="form-group d-flex align-items-center mt-3 mx-1">
                <label htmlFor="stc">
                  <p className="h6 fw-bold m-0">STC:</p>
                </label>
                <input
                  type="time"
                  required
                  id="stc"
                  placeholder="Enter the Completion Time"
                  value={stc}
                  onChange={(e) => {
                    setStc(e.target.value);
                  }}
                  tabIndex={1}
                />
              </div>
            </div>
            <div className="mx-3 w-100">
              <div className="form-group">
                <label htmlFor="to">
                  <p className="h6 fw-bold">Map Id:</p>
                </label>
                <input
                  type="text"
                  id="to"
                  placeholder="Enter Map Id"
                  value={mapid}
                  onChange={(e) => {
                    setMapid(e.target.value);
                  }}
                  tabIndex={1}
                />
              </div>
            </div>
            <div className="d-flex">
              <Link
                to="/admin"
                className="btn btn-outline-dark text-decoration-none mx-2 mt-3 rounded-4 w-50"
              >
                Back
              </Link>
              <button type="submit" className="secondary-button w-50 mx-2">
                Add Bus
              </button>
            </div>
          </form>
        </div>
        {/* <div className="home-image-container">
            <img src={BannerImage} alt="" />
          </div> */}
        {/* <ViewBus /> */}
      </div>
      <Footer />
    </>
  );
};

export default AddBus;
