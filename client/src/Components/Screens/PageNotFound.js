import React from "react";
import NotFoundImg from "../../Assets/page-not-found.gif";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
        <h2>Page Not Found</h2>
        <div className="w-25">
          <img src={NotFoundImg} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
