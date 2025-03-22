import React from "react";
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

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="sidebar">
      <div className="logo">CNNCT</div>
      <nav className="menu">
        <ul>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} /> Events
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} /> Booking
          </li>
          <li>
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
      <div className="user-profile">
        <img src="https://via.placeholder.com/40" alt="User Profile" />
        <span>{user?.username || "User"}</span>
      </div>
    </div>
  );
};

export default Sidebar;
