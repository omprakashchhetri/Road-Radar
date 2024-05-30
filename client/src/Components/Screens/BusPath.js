import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams, useNavigate } from "react-router-dom";
import { FaBusSimple } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import ScaleLoader from "react-spinners/ScaleLoader";

const GetBus = () => {
  const { busno } = useParams();
  const [busnum, setBusNum] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [viaDistance, setViaDistance] = useState("");
  const [destinationDistance, setDestinationDistance] = useState("");
  const [via, setVia] = useState("");
  const [sta, setSta] = useState("");
  const [stc, setStc] = useState("");
  const [viaSta, setViaSta] = useState("");
  const [mapid, setMapid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/userlogin");
    } else {
      axios
        .get(`/api/auth/fetchbus/${busno}`)
        .then((result) => {
          setBusNum(result.data.busno);
          setSource(result.data.source);
          setDestination(result.data.destination);
          setVia(result.data.via);
          setSta(result.data.sta);
          setStc(result.data.stc);
          setViaDistance(result.data.viaDistance);
          setViaSta(result.data.viaSta);
          setDestinationDistance(result.data.destinationDistance);
          setMapid(result.data.mapid);
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);

  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert '0' hours to '12'
    return `${hours}:${minutes} ${period}`;
  };
  const url = "https://www.google.com/maps/d/embed?mid=";
  const uri = url + mapid;
  const noMap = {
    width: "500px",
    height: "100%,",
  };
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center bus_details_wrapper">
        <div className="d-flex align-items-center">
          <h6 className="pt-2 mb-0">
            Bus no. :
            <div className="d-flex flex-column align-items-center text-start text-secondary bg-warning px-1 rounded h4">
              {busnum}
            </div>
          </h6>
        </div>
        <div className="d-flex justify-content-center w-100 h-100">
          <div className="d-flex flex-column align-items-center px-4 h-100">
            <div className="d-flex align-items-center border px-2 py-1 rounded-3 bg-light mb-2">
              <small className="sm_font2 ps-2 mb-0 text-secondary">
                {source}
              </small>
              <small>
                <IoMdArrowDropright />
              </small>
              <small className="sm_font2 mb-0 text-secondary">{via}</small>
              <small className="">
                <IoMdArrowDropright />
              </small>
              <small className="sm_font2 mb-0 text-secondary">
                {destination}
              </small>
            </div>
            {mapid ? (
              <iframe
                title={busnum}
                src={uri}
                width="500"
                height="500"
                style={{ borderRadius: "20px" }}
              ></iframe>
            ) : (
              <div
                className="d-flex justify-content-center border rounded-3 h-100 align-items-center"
                style={noMap}
              >
                <ScaleLoader color="#017cff" />
              </div>
            )}
          </div>
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
                    <small className="sm_font px-2">
                      {convertTo12HourFormat(sta)}
                    </small>
                  </div>
                  <div className="d-flex flex-column align-items-center mx-5">
                    <span className="px-2">{source}</span>
                    <small className="sm_font px-2">0.0 KM</small>
                  </div>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex flex-column align-items-center">
                  <span className="px-2">{convertTo12HourFormat(sta)}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center rounded marker_text1 w-100 px-4">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="px-2 text-success">STA</span>
                    <small className="sm_font px-2">
                      {convertTo12HourFormat(viaSta)}
                    </small>
                    {/* <small className="sm_font px-2">
                      {convertTo12HourFormat(stc)}
                    </small> */}
                  </div>
                  <div className="d-flex flex-column align-items-center mx-5">
                    <span className="px-2">{via}</span>
                    <small className="sm_font px-2">{viaDistance} KM</small>
                  </div>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex align-items-center">
                  {/* <span className="px-2">{convertTo12HourFormat(sta)}</span> */}
                  <span className="px-2">{convertTo12HourFormat(viaSta)}</span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center rounded marker_text2 w-100 px-4">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="px-2 text-success">STA</span>
                    <small className="sm_font px-2">
                      {convertTo12HourFormat(stc)}
                    </small>
                  </div>
                  <div className="d-flex flex-column align-items-center mx-5">
                    <span className="px-2">{destination}</span>
                    <small className="sm_font px-2">
                      {destinationDistance} KM
                    </small>
                  </div>
                </div>
                <span className="">
                  <GoDash />
                </span>
                <div className="d-flex align-items-center">
                  <span className="px-2">{convertTo12HourFormat(stc)}</span>
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
