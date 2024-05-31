import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { toast } from "sonner";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const email = localStorage.getItem("email");
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const userUpdateToast = () => {
    toast.success("Details Updated", { duration: 2000 });
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      axios.get(`/api/auth/fetchuser/${email}`).then((result) => {
        setUsername(result.data.username);
        setEmailId(result.data.email);
      });
    }
  }, [email, navigate]);

  const userDetailHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `/api/auth/updateuser/${id}`,
        {
          email,
          username,
          emailId,
        },
        config
      );
      if (response.status >= 200 && response.status < 300) {
        userUpdateToast();
        navigate(`/profile/${id}`);
      } else {
        setError("Failed. Please try again.");
      }
    } catch (e) {
      setError(e.response?.data?.error || "An error occurred during updating.");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const passwordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `/api/auth/changepassword/${emailId}`,
        {
          emailId,
          currentPassword,
          newPassword,
        },
        config
      );
      if (response.status >= 200 && response.status < 300) {
        toast.success("Password Updated", { duration: 2000 });
        localStorage.clear();
        navigate("/userlogin");
      } else {
        setErrorPass("Failed. Please try again.");
      }
    } catch (e) {
      setErrorPass(
        e.response?.data?.error || "An error occurred during updating."
      );
      setTimeout(() => {
        setErrorPass("");
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile_wrapper d-flex justify-content-center align-items-center pt-1">
        <div className=" cst_wt h-75 rounded">
          <div className="row px-3">
            <div className="col-6 bg-light rounded-4 pt-2 profile_wrapper1">
              <div className="w-100 d-flex justify-content-center mt-2">
                <h5 className="bg-white text-center rounded-3 py-2 w-50">
                  My Profile
                </h5>
              </div>
              <form
                onSubmit={userDetailHandler}
                className="d-flex p-3 flex-column"
              >
                {error && <span className="error-message">{error}</span>}
                <div className="d-flex justify-content-center rounded-2 p-2 px-5">
                  <img
                    src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg"
                    alt=""
                    className="w-100 rounded-4"
                  />
                </div>
                <div className="d-flex pt-2">
                  <div className="form-group">
                    <label htmlFor="number" className="p-0 m-0">
                      Name
                    </label>
                    <input
                      type="text"
                      id="number"
                      className=""
                      value={username}
                      placeholder="Enter Email Id"
                      onChange={(e) => setUsername(e.target.value)}
                      tabIndex={1}
                    />
                  </div>
                </div>
                <div className="d-flex pt-2">
                  <div className="form-group">
                    <label htmlFor="email" className="p-0 m-0">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=""
                      value={emailId}
                      readOnly
                      placeholder="Enter Email Id"
                      onChange={(e) => setEmailId(e.target.value)}
                      tabIndex={1}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <button
                    type="submit"
                    className="save_btn rounded-5 bg-primary text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6">
              <form
                onSubmit={passwordHandler}
                className="d-flex flex-column rounded-4 bg-light px-4 py-3 profile_wrapper2"
              >
                <div className="w-100 d-flex justify-content-center">
                  <h5 className="bg-white text-center rounded-3 py-2 w-75">
                    Change Password
                  </h5>
                </div>
                {errorPass && (
                  <span className="error-message">{errorPass}</span>
                )}
                <div className="form-group">
                  <label htmlFor="current-password" className="p-0 m-0">
                    Current Password:
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className=""
                    placeholder="Enter your Current Password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    tabIndex={1}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="new-password" className="p-0 m-0">
                    New Password:
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className=""
                    placeholder="Enter your New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    tabIndex={1}
                  />
                </div>
                <div className="d-flex justify-content-end pt-2">
                  <button
                    type="submit"
                    className="save_btn rounded-5 bg_warning text-white"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
