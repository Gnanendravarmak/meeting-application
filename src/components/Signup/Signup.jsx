import React, { useState } from "react";
import "./Signup.css";
import { signup } from "../../api";
import signupImage from "../../assets/Frame 1.svg";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader"; // Import Loader component
import ToastMessage from "../ToastMessage/ToastMessage"; // Import ToastMessage component

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await signup(firstName, lastName, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {loading && <Loader />} {/* Display Loader when loading */}
      {error && <ToastMessage message={error} />}{" "}
      {/* Display ToastMessage when error */}
      <div className="signup-content">
        {/* Form on the Left */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="title-login-container">
            <h1 className="signup-title">Create Account</h1>
            <Link to="/login" className="login-link">
              Sign in instead
            </Link>
          </div>

          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
          <input
            className="signup-input"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="lastName" className="input-label">
            Last Name
          </label>
          <input
            className="signup-input"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            className="signup-input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            className="signup-input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword" className="input-label">
            Confirm Password
          </label>
          <input
            className="signup-input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="terms-container">
            <label htmlFor="terms" className="terms-label-single-line">
              <input
                className="terms-checkbox"
                type="checkbox"
                id="terms"
                required
              />
              By creating an account, I agree to the Terms of Use and Privacy
              Policy
            </label>
          </div>

          <div className="signup-btn-container">
            <button type="submit" className="signup-button" disabled={loading}>
              {loading ? "Loading..." : "Create an Account"}
            </button>
          </div>
        </form>

        {/* Image on the Right */}
        <img
          src={signupImage}
          alt="Signup Illustration"
          className="signup-image"
        />
      </div>
    </div>
  );
};

export default Signup;
