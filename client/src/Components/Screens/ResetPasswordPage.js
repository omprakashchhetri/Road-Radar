import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { resetToken } = useParams();
  // alert(resetToken);
  const resetPasswordHandler = async (e) => {
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
      return setError("Passwords don't match");
    }

    try {
      const response = await axios.put(
        `/api/auth/passwordreset/${resetToken}`,
        { password },
        config
      );

      if (response && response.data) {
        console.log(response.data);
        setSuccess(response.data.data || "Password reset successful");
      } else {
        setError("Unexpected response structure");
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
    <div className="resetpassword-screen">
      <form
        onSubmit={resetPasswordHandler}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Reset Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && (
          <span className="success-message">
            {success} <Link to="/userlogin">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
