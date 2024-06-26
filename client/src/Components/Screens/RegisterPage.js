import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../Assets/road-radar-logo.png";
import { toast } from "sonner";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const RegisterToast = () => {
    toast.success("Success", { duration: 2000 });
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/register");
    }
    // eslint-disable-next-line
  }, []);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password do not match");
    }

    try {
      const response = await axios.post(
        "/api/auth/adminregister",
        { username, email, password },
        config
      );

      if (response.status >= 200 || response.status < 300) {
        // Registration was successful
        RegisterToast();
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("mode", 1);
        navigate("/");
      } else {
        // Handle server response error
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error response:", error);
      setError(
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Something went wrong, please try again later"
      );
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen flex-column">
      <div className="rounded-5 register-screen__form d-flex  justify-content-between px-4">
        <div className="logo-reg d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center align-items-center w-100">
            <img src={Logo} className="" alt="" />
          </div>
          <div className=" d-flex flex-column justify-content-center mt-5 align-items-center">
            <h1 className="text-primary display-2 fw-bolder">Welcome!</h1>
            <p className="paragraph-reg-login text-center mx-2 mt-2">
              Welcome to Road-Radar, where convenience meets commuting. We take
              pride in simplifying your daily journey by providing comprehensive
              local bus routes.
            </p>
            <p className="paragraph-reg-login text-center mx-2 mt-2">
              Navigating the city has never been easier - discover the quickest,
              most efficient routes with our user-friendly service. Say goodbye
              to commuting hassles and hello to seamless travel experiences
              with Road-Radar.
            </p>
          </div>
          <div className="footer-icons mt-5 pt-5">
            <FaXTwitter />
            <SiLinkedin />
            <FaFacebookF />
          </div>
        </div>
        <form
          onSubmit={registerHandler}
          className="form-register d-flex flex-column justify-content-center align-items-center"
        >
          <h2 className="register-screen__title fw-bold">
            ADMIN<span className="text-primary"> REGISTER</span>
          </h2>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="name">
              <strong>Username:</strong>
            </label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email: </strong>
            </label>
            <input
              type="email"
              required
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">
              <strong>Confirm Password:</strong>{" "}
            </label>
            <input
              type="password"
              required
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <span className="register-screen__subtext mt-3">
            Already a Admin? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <span className="text-white mb-0 mt-2">
        Copyright © Road Radar | 2023-2024
      </span>{" "}
    </div>
  );
};

export default RegisterPage;
