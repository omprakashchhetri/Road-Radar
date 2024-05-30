import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import axios from "axios";
// import { toast } from "sonner";
// import ViewBus from "../Screens/ViewBus";
// import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile_wrapper d-flex justify-content-center align-items-center pt-1">
        <div className=" cst_wt h-75 rounded">
          <div className="row px-3">
            <div className="col-6 bg-light rounded-4 pt-2">
              <div className="w-100 d-flex justify-content-center mt-2">
                <h5 className="bg-white text-center rounded-3 py-2 w-50">
                  My Profile
                </h5>
              </div>
              <div className="d-flex p-3 flex-column">
                <div className="d-flex justify-content-center rounded-2 p-2 px-5">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt=""
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="d-flex pt-2">
                  <div className="form-group">
                    <label htmlFor="number" className="p-0 m-0">
                      Username
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
                      Email.:
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=""
                      value={"johndoe@gmail.com"}
                      placeholder="Enter Email Id"
                      onChange={(e) => {}}
                      tabIndex={1}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <button className="save_btn rounded-5 bg-primary text-white">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column rounded-4 bg-light px-4 py-3">
                <div className="w-100 d-flex justify-content-center">
                  <h5 className="bg-white text-center rounded-3 py-2 w-75">
                    Change Password
                  </h5>
                </div>
                <div className="form-group">
                  <label htmlFor="number" className="p-0 m-0">
                    Current Password:
                  </label>
                  <input
                    type="text"
                    id="text"
                    className=""
                    value={"123465"}
                    placeholder="Enter Email Id"
                    onChange={(e) => {}}
                    tabIndex={1}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number" className="p-0 m-0">
                    New Password:
                  </label>
                  <input
                    type="text"
                    id=""
                    className=""
                    value={"123465"}
                    placeholder="Enter Email Id"
                    onChange={(e) => {}}
                    tabIndex={1}
                  />
                </div>
                <div className="d-flex justify-content-end pt-2">
                  <button className="save_btn rounded-5 bg_warning text-white">
                    Change Password
                  </button>
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
