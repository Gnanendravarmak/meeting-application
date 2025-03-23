import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUserCircle,
  faClock,
  faCog,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleSettings = () => navigate("/settings");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="logo">CNNCT</div>
      <nav className="menu">
        <ul>
          <li onClick={() => navigate("/event-creation")}>
            <FontAwesomeIcon icon={faCalendarAlt} /> Events
          </li>
          <li onClick={() => navigate("/booking")}>
            <FontAwesomeIcon icon={faUserCircle} /> Booking
          </li>
          <li onClick={() => navigate("/availability")}>
            <FontAwesomeIcon icon={faClock} /> Availability
          </li>
          <li onClick={handleSettings}>
            <FontAwesomeIcon icon={faCog} /> Settings
          </li>
          <li onClick={() => navigate("/create-event")}>
            <FontAwesomeIcon icon={faPlus} /> Create
          </li>
        </ul>
      </nav>

      {/* User Profile with Logout Dropdown */}
      <div className="user-profile" onClick={() => setShowLogout(!showLogout)}>
        {user?.profileImage ? (
          <img src={user.profileImage} alt="User" className="profile-img" />
        ) : (
          <div className="profile-circle">
            {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
          </div>
        )}
        <span className="username">{user?.username || "User"}</span>

        {/* Sign Out Dropdown */}
        {showLogout && (
          <div className="logout-menu">
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
