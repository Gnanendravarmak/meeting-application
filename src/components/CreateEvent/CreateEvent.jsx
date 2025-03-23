import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateEvent.css";
import { createEvent } from "../../api";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    password: "",
    hostname: "",
    setduration: "",
    timezone: "UTC+5",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const combinedDateTime = new Date(`${formData.date}T${formData.time}:00`);

    const dataToSend = {
      title: formData.title,
      description: formData.description,
      date: combinedDateTime,
      password: formData.password,
      hostname: formData.hostname,
      setduration: Number(formData.setduration),
      timezone: formData.timezone,
    };
    try {
      const response = await createEvent(dataToSend);
      setSuccessMessage(response?.data || "Event created successfully!");
      setErrorMessage("");
      navigate("/event-creation");
    } catch (error) {
      setErrorMessage(error.response?.data || "Error creating event: " + error.message);
      setSuccessMessage("");
      console.error("Error creating event: ", error);
    }
  };

  const handleCancel = () => {
    navigate("/event-creation");
  };

  return (
    <div className="create-event-page">
      <Sidebar />
      <div className="create-event-content">
        <h2 className="create-event-title">Create New Event</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="create-event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              className="input-field"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Event Description</label>
            <textarea
              name="description"
              placeholder="Enter event description"
              className="input-field"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Hostname</label>
            <input
              type="text"
              name="hostname"
              placeholder="Enter hostname"
              className="input-field"
              value={formData.hostname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date, Time, and Time Zone in One Line */}
          <div className="form-group datetime-group">
            <label>Date, Time & Time Zone</label>
            <div className="datetime-container">
              <input
                type="date"
                name="date"
                className="input-field"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                className="input-field"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <select
                name="timezone"
                className="input-field"
                value={formData.timezone}
                onChange={handleChange}
                required
              >
                <option value="UTC-5">UTC -5 (New York)</option>
                <option value="UTC+1">UTC +1 (London)</option>
                <option value="UTC+5">UTC +5 (Delhi)</option>
                <option value="UTC+8">UTC +8 (Beijing)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Duration (mins)</label>
            <select
              name="setduration"
              className="input-field"
              value={formData.setduration}
              onChange={handleChange}
              required
            >
              <option value="30">30 mins</option>
              <option value="60">1 hour</option>
              <option value="90">1 hour 30 mins</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div className="button-group">
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="btn cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
