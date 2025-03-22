import React, { useState, useEffect } from "react";
import { deleteEvent, getEvents } from "../../api";
import { useNavigate } from "react-router-dom";
import "./EventCreation.css";
import Sidebar from "../Sidebar/Sidebar"; // Importing Sidebar

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const EventCreation = () => {
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEventTypes(events);
    };
    fetchEvents();
  }, []);

  const navigate = useNavigate();

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    navigate("/create-event");
  };

  const handleDeleteEvent = async (eventId) => {
    await deleteEvent(eventId);
    setEventTypes(eventTypes.filter((event) => event.id !== eventId));
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="event-types-container">
      <Sidebar />
      <div className="content">
        <h2>Event Types</h2>
        <div className="create-event-container-title">
          <p className="create-title">
            Create events to share for people to book on your calendar.
          </p>
          <button className="create-event-button" onClick={handleCreateEvent}>
            + Create Event
          </button>
        </div>
        <div className="events-list">
          {eventTypes.map((eventType) => (
            <div key={eventType._id} className="event-card">
              <h3>{eventType.title}</h3>
              <p>{eventType.description}</p>
              <div className="event-details">
                <p>{eventType.date}</p>
                <p>{eventType.time}</p>
              </div>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete-icon"
                onClick={() => handleDeleteEvent(eventType._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
