import React from "react";
import axios from "axios";
import { toast } from "sonner";
import Navbar from "../Navbar";
// import ViewBus from "../Screens/ViewBus";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile_wrapper d-flex justify-content-center align-items-center pt-2">
        <div className=" w-50 h-75 rounded bg-light py-2">
          <div className="row px-2">
            <div className="col-12">
              <div className="d-flex justify-content-center bg-white rounded-2 p-2 px-5">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt=""
                  className="w-50 rounded-3"
                />
              </div>
            </div>
          </div>
          <div className="row px-3">
            <div className="col-6">
              <div className="d-flex pt-2">
                <div className="form-group">
                  <label htmlFor="number" className="p-0 m-0">
                    Name
                  </label>
                  <input
                    type="text"
                    id="number"
                    className=""
                    value={"John Cena"}
                    placeholder="Enter Email Id"
                    onChange={(e) => {}}
                    tabIndex={1}
                  />
                </div>
              </div>
              <div className="d-flex pt-2">
                <div className="form-group">
                  <label htmlFor="number" className="p-0 m-0">
                    Phone no.:
                  </label>
                  <input
                    type="number"
                    id="text"
                    className=""
                    value={"1234567890"}
                    placeholder="Enter Email Id"
                    onChange={(e) => {}}
                    tabIndex={1}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex pt-2">
                <div className="form-group">
                  <label htmlFor="number" className="p-0 m-0">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    className=""
                    value={"omchhetri@gmail.com"}
                    placeholder="Enter Email Id"
                    onChange={(e) => {}}
                    tabIndex={1}
                  />
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

export default Profile;
