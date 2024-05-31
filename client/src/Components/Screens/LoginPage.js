import "./LoginPage.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../Assets/road-radar-logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginToast = () => {
    toast.success("Success", { duration: 2000 });
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      if (response && response.data && response.data.token) {
        console.log(response.data);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("email", email);
        localStorage.setItem("mode", 1);
        loginToast();
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError(
        error.response?.data?.error || "An error occurred during login."
      );
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen flex-column">
      <div className=" login-screen__form d-flex justify-content-between rounded-5 px-4">
        <div className="logo d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center align-items-center w-100">
            <img src={Logo} className="" alt="" />
          </div>
          <div className="  d-flex flex-column justify-content-center mt-4 align-items-center">
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
          <div className="footer-icons mt-3 pt-2">
            <FaXTwitter />
            <SiLinkedin />
            <FaFacebookF />
          </div>
        </div>
        <form
          onSubmit={loginHandler}
          className="form-login d-flex flex-column justify-content-center align-items-center"
          action=""
        >
          <h1 className="login-screen__title fw-bold">
            ADMIN <span className="text-primary">LOGIN</span>
          </h1>
          {error && <span className="error-message">{error}</span>}

          <div className="form-group">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              required
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              tabIndex={1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password:</strong>{" "}
            </label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              tabIndex={2}
            />
          </div>
          <button type="submit" className="btn btn-primary" tabIndex={3}>
            Login
          </button>
          <span className="login-screen__subtext mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </span>

          <span>
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </span>
          <span className="login-screen__subtext ">
            Login as User? <Link to="/userlogin">Login</Link>
          </span>
        </form>
      </div>
      <span className="text-white mb-0 mt-2">
        Copyright © Road Radar | 2023-2024
      </span>
    </div>
  );
};

export default LoginPage;
