import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { SlDocs } from "react-icons/sl";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoBus } from "react-icons/io5";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

const Admin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  // const [image, setImage] = useState("");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      axios.get(`/api/auth/fetchuser/${email}`).then((result) => {
        setId(result.data._id);
        setUsername(result.data.username);
        setEmailId(result.data.email);
      });
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
        <div className="addbus admin-wrapper d-flex flex-column align-items-center py-3 cstm_admin_wt bg-light rounded-5">
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
            <TbDeviceDesktopAnalytics size={50} />
            <h1 className="">
              ADMIN <span className="text-primary">PANEL</span>
            </h1>
            <h5>Welcome {username}</h5>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center w-100 h-50">
            <div className="admin-subcontainer d-flex flex-column bg-white rounded-5 justify-content-center align-items-center m-2 h-75">
              <div className="h-25 pt-4">
                <h3 className="w-100 text-center d-flex align-items-center">
                  <SlDocs size={25} />
                  &nbsp; Pages
                </h3>
              </div>
              <div className="h-75 d-flex flex-column pt-2">
                <Link className="text-decoration-none" to="/login">
                  Log In
                </Link>
                <Link className="text-decoration-none" to="/register">
                  Register
                </Link>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </div>
            </div>
            <div className="admin-subcontainer d-flex flex-column bg-white rounded-5 justify-content-center align-items-center m-2 h-75">
              <div className="h-25 pt-4">
                <h3 className="w-100 text-center d-flex align-items-center">
                  <MdOutlineAdminPanelSettings />
                  &nbsp;Admin
                </h3>
              </div>
              <div className="h-75 d-flex flex-column pt-2">
                <Link className="text-decoration-none" to="/register">
                  Admin Register
                </Link>
                <Link className="text-decoration-none" to="/addbus">
                  Add Bus
                </Link>
                <Link className="text-decoration-none" to="/delete">
                  Delete Bus
                </Link>
                <Link className="text-decoration-none" to="/delete">
                  Update Bus
                </Link>
              </div>
            </div>
            <div className="admin-subcontainer d-flex flex-column bg-white rounded-5 justify-content-center align-items-center m-2 h-75">
              <div className="h-25 pt-4">
                <h3 className="w-100 text-center d-flex align-items-center">
                  <FaUserFriends />
                  &nbsp;Users
                </h3>
              </div>
              <div className="h-75 d-flex flex-column pt-2">
                <Link className="text-decoration-none" to="/userlogin">
                  User Login
                </Link>
                <Link className="text-decoration-none" to="/userregister">
                  User Register
                </Link>
                {/* <Link className="text-decoration-none" to="/profile/123">
                  Profile
                </Link> */}
              </div>
            </div>
            <div className="admin-subcontainer d-flex flex-column bg-white rounded-5 justify-content-center align-items-center m-2 h-75">
              <div className="h-25 pt-4">
                <h3 className="w-100 text-center d-flex align-items-center">
                  <IoBus size={25} />
                  &nbsp;Buses
                </h3>
              </div>
              <div className="h-75 d-flex flex-column pt-2">
                <Link className="text-decoration-none" to="/viewbus">
                  Bus List
                </Link>
              </div>
            </div>
          </div>
          <Link to={`/profile/${id}`}>
            Go to Profile &nbsp;
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
