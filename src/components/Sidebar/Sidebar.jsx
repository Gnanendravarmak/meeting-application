import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUserCircle,
  faClock,
  faCog,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="logo">CNNCT</div>
      <nav className="menu">
        <ul>
          <li
            className={isActive("/event-creation") ? "active" : ""}
            onClick={() => navigate("/event-creation")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} /> Events
          </li>
          <li
            className={isActive("/booking") ? "active" : ""}
            onClick={() => navigate("/booking")}
          >
            <FontAwesomeIcon icon={faUserCircle} /> Booking
          </li>
          <li
            className={isActive("/availability") ? "active" : ""}
            onClick={() => navigate("/availability")}
          >
            <FontAwesomeIcon icon={faClock} /> Availability
          </li>
          <li
            className={isActive("/settings") ? "active" : ""}
            onClick={() => navigate("/settings")}
          >
            <FontAwesomeIcon icon={faCog} /> Settings
          </li>
          <li
            className={isActive("/create-event") ? "active" : ""}
            onClick={() => navigate("/create-event")}
          >
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
