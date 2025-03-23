import React, { useState } from "react";
import "./Login.css";
import { login } from "../../api";
import signupImage from "../../assets/Frame 1.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader"; // Import Loader component
import Popup from "../Popup/Popup"; // Import Popup component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error
    login(email, password) // Pass email and password to login function
      .then(() => {
        setLoading(false);
        navigate("/preferences");
        // Handle successful login (e.g., redirect to dashboard)
      })
      .catch((err) => {
        setError(err.message || "An error occurred. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      {/* Loader */}
      {loading && <Loader />}

      {/* Error Popup */}
      {error && <Popup message={error} onClose={() => setError("")} />}

      <div className="login-content">
        {/* Form on the Left */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="title-login-container">
            <h1 className="login-title">Sign in</h1>
          </div>

          <input
            className="login-input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />

          <div className="password-container">
            <input
              className="login-input"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              aria-label="Toggle password visibility"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <div className="login-btn-container">
            <button
              type="submit"
              className="login-button"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>

          <div className="account-login-container">
            <p className="account-text">Don't have an account?</p>
            <Link to="/signup" className="login-link">
              Sign up
            </Link>
          </div>
        </form>

        {/* Image on the Right */}
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Login;
