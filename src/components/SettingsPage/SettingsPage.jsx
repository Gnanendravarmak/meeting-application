import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords
    if (formData.currentPassword === formData.newPassword) {
      alert("New password must be different from the current password.");
      return;
    }
    // Submit profile update logic here
    console.log("Profile Updated", formData);
  };

  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-content">
        <h1 className="settings-title">Settings</h1>

        {/* Edit Profile Section */}
        <div className="edit-profile-section">
          <h2 className="section-title">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="edit-profile-form">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-input"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-input"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="form-input"
                placeholder="Enter Current Password"
                value={formData.currentPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="form-input"
                placeholder="Enter New Password"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="update-btn">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
