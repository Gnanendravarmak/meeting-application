import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./CreateEvent.css";
import { createEvent } from "../../api";
import ll from "../../assets/sign.webp";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventTopic: "",
    password: "",
    hostName: "",
    description: "",
    date: "",
    time: "",
    am: "",
    timezone: "",
    duration: "",
    bannerColor: "",
    bannerName: "",
    link: "",
    emails: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedEmails = formData.emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email !== ""); // Remove empty strings

    try {
      const updatedFormData = { ...formData, emails: parsedEmails };
      console.log(updatedFormData);
      const response = await createEvent(updatedFormData);
      setSuccessMessage(response?.data || "Event created successfully!");
      setErrorMessage("");
      navigate("/event-summary");
    } catch (error) {
      setErrorMessage(
        error.response?.data || "Error creating event: " + error.message
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="create-event-page">
      <Sidebar />
      <div className="create-event-content">
        <h2 className="create-event-title">Add Event</h2>
        <p className="create-event-subtitle">
          {step === 1
            ? "Create events to share for people to book on your calendar."
            : "Customize your event banner details."}
        </p>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="event-form-container">
          {step === 1 ? (
            <form className="create-event-form" onSubmit={handleNext}>
              <div className="form-group">
                <label>
                  Event Topic <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="eventTopic"
                  className="input-field"
                  value={formData.eventTopic}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="input-field"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Host Name <span className="required">*</span>
                </label>
                <input
                  name="hostName"
                  className="input-field"
                  value={formData.hostName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  className="input-field"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <hr className="separator" />

              <div className="form-group">
                <label>
                  Date and Time <span className="required">*</span>
                </label>
                <div className="datetime-container">
                  <input
                    type="date"
                    name="date"
                    className="input-field"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="time"
                    className="input-field"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="02:30">02:30</option>
                    <option value="03:00">03:00</option>
                  </select>
                  <select
                    name="am"
                    className="input-field"
                    value={formData.am}
                    onChange={handleChange}
                    required
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                  <select
                    name="timezone"
                    className="input-field"
                    value={formData.timezone}
                    onChange={handleChange}
                    required
                  >
                    <option value="UTC+5:00 Delhi">UTC+5:00 Delhi</option>
                    <option value="UTC+1:00 London">UTC+1:00 London</option>
                  </select>
                </div>
              </div>

              <div className="button-group">
                <button type="button" className="btn cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="btn submit-btn">
                  Next
                </button>
              </div>
            </form>
          ) : (
            <form className="create-event-form" onSubmit={handleSubmit}>
              <div className="banner-section">
                <h3>Banner</h3>
                <div className="banner-preview-container">
                  <div
                    className="banner-preview"
                    style={{ backgroundColor: formData.bannerColor }}
                  >
                    <img
                      src={ll}
                      alt="Banner Preview"
                      className="banner-image"
                    />
                    <span className="edit-icon">✎</span>
                  </div>
                </div>
                <div className="color-selection">
                  <label>Custom Background Color</label>
                  <input
                    type="color"
                    name="bannerColor"
                    className="color-picker"
                    value={formData.bannerColor}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Add Link *</label>
                <input
                  type="text"
                  name="link"
                  className="input-field"
                  placeholder="Enter URL Here"
                  value={formData.link}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Add Emails *</label>
                <input
                  type="text"
                  name="emails"
                  className="input-field"
                  placeholder="Add member Emails (comma-separated)"
                  value={formData.emails}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="button-group">
                <button
                  type="button"
                  className="btn cancel-btn"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn submit-btn">
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
