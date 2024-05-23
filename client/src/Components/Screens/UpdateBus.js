import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Navbar from "../Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer";
const AddBus = () => {
  const { busno } = useParams();
  const [busnum, setBusNum] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [viaDistance, setViaDistance] = useState("");
  const [destinationDistance, setDestinationDistance] = useState("");
  const [via, setVia] = useState("");
  const [viaSta, setViaSta] = useState("");
  const [sta, setSta] = useState("");
  const [stc, setStc] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const UpdateToast = () => {
    toast.success("Success", { duration: 2000 });
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      axios
        .get(`/api/auth/fetchbus/${busno}`)
        .then((result) => {
          setBusNum(result.data.busno);
          setSource(result.data.source);
          setDestination(result.data.destination);
          setVia(result.data.via);
          setSta(result.data.sta);
          setViaSta(result.data.viaSta);
          setStc(result.data.stc);
          setViaDistance(result.data.viaDistance);
          setDestinationDistance(result.data.destinationDistance);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);

  const Update = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `/api/auth/update/${busno}`,
        {
          busnum,
          source,
          destination,
          via,
          sta,
          viaSta,
          stc,
          viaDistance,
          destinationDistance,
        },
        config
      );
      if (response.status >= 200 && response.status < 300) {
        // If successful
        // console.log("In");
        UpdateToast();
        navigate("/delete");
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
      <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <div className="addbus d-flex flex-column justify-content-center align-items-center bg-light p-2 pt-4 rounded-5">
          <h1>
            UPDATE <span className="text-primary">DETAILS</span>
          </h1>
          <form onSubmit={Update} className=" w-100 p-3" action="">
            {error && <span className="error-message">{error}</span>}
            <div className="d-flex flex-column">
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
                      value={busnum}
                      onChange={(e) => {
                        setBusNum(e.target.value);
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
                      placeholder="Enter Destination Distance:"
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
            </div>
            <div className="d-flex">
              <Link
                to="/admin"
                className="btn btn-outline-dark text-decoration-none mx-2 mt-3 rounded-4 w-50"
              >
                Back
              </Link>
              <button type="submit" className="secondary-button w-50 mx-2">
                Update Bus
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
