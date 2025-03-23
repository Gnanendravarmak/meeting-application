import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AvailabilitySettings.css";

const localizer = momentLocalizer(moment);

const AvailabilitySettings = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date
  const [newEvent, setNewEvent] = useState({
    start: null,
    end: null,
    message: "",
  });

  // Handle date click
  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setNewEvent({
      start: slotInfo.start,
      end: slotInfo.start,
      message: "",
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle time changes
  const handleTimeChange = (type, time) => {
    setNewEvent((prev) => ({
      ...prev,
      [type]: new Date(
        prev[type].getFullYear(),
        prev[type].getMonth(),
        prev[type].getDate(),
        time.split(":")[0],
        time.split(":")[1]
      ),
    }));
  };

  // Add a new event to the calendar
  const addEvent = () => {
    if (!newEvent.start || !newEvent.end || !newEvent.message) {
      alert("Please fill in all fields");
      return;
    }

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setSelectedDate(null); // Reset the selected date
    setNewEvent({ start: null, end: null, message: "" }); // Reset the form
  };

  return (
    <div className="availability-container">
      <Sidebar />
      <div className="availability-content">
        <h1>Availability Settings</h1>
        <p>Select a date on the calendar to add time and message.</p>

        {/* Calendar */}
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={["month", "week", "day"]}
            defaultView="month"
            style={{ height: 500 }}
            selectable
            onSelectSlot={handleDateClick} // Handle date clicks
            popup
            onSelectEvent={(event) => alert(event.message || "No message")}
          />
        </div>

        {/* Time and Message Form (Conditionally Rendered) */}
        {selectedDate && (
          <div className="event-form">
            <h3>
              Add Time and Message for {moment(selectedDate).format("LL")}
            </h3>
            <input
              type="time"
              name="start"
              value={moment(newEvent.start).format("HH:mm")}
              onChange={(e) => handleTimeChange("start", e.target.value)}
            />
            <input
              type="time"
              name="end"
              value={moment(newEvent.end).format("HH:mm")}
              onChange={(e) => handleTimeChange("end", e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Add a custom message"
              value={newEvent.message}
              onChange={handleInputChange}
            />
            <button onClick={addEvent}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailabilitySettings;
