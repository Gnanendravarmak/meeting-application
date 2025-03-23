import React from "react";
import "./Booking.css";
import Sidebar from "../Sidebar/Sidebar";

const Booking = () => {
  const totalPeople = 42;

  return (
    <div className="booking-container">
      <Sidebar />

      <div className="booking-content">
        <h1>Booking Dashboard</h1>

        <div className="booking-options">
          <p className="booking-option accept">Accept</p>
          <p className="booking-option cancel">Cancel</p>
          <p className="booking-option pending">Pending</p>
          <p className="booking-option past">Past</p>
        </div>

        <div className="total-people">
          Total People: <span className="people-count">{totalPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default Booking;
