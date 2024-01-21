import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordPage.css";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const navigate = useNavigate();

  const ForgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
      // navigate("/login");
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen ">
      <div className=" forgot-screen__form d-flex justify-content-center rounded-5 px-4">
        <form
          onSubmit={ForgotPasswordHandler}
          className="forgotpassword-screen__form d-flex flex-column justify-content-center align-items-center"
        >
          <h3 className="forgotpassword-screen__title">
            FORGOT <span className="text-primary">PASSWORD</span>{" "}
          </h3>
          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}
          <div className="form-group">
            <p className="forgotpassword-screen__subtext">
              Please enter the email address you register your account with. We
              will send you reset password confirmation to this email.
            </p>
            <label htmlFor="email">
              {" "}
              <strong>Email:</strong>{" "}
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
          <button type="submit" className="btn btn-primary">
            Send Email
          </button>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
