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
      <div className="profile_wrapper vh-100"></div>
      <Footer />
    </>
  );
};

export default Profile;
