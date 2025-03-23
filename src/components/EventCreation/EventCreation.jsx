import React, { useState, useEffect } from "react";
import { deleteEvent, disableEvent, getEventById, getEvents } from "../../api";
import { useNavigate } from "react-router-dom";
import "./EventCreation.css";
import Sidebar from "../Sidebar/Sidebar"; // Importing Sidebar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Switch from '@mui/material/Switch';
import { FiCopy } from "react-icons/fi";
import { RxSwitch } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";

const EventCreation = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [show, setShow] = useState(true);
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };

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
    const events = await getEvents();
    setEventTypes(events);
  };

  const handleDisable = async (eventId) => {
    console.log(eventId);
    await disableEvent(eventId);
    const events = await getEvents();
    setEventTypes(events);
  }

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleLoad = async (eventId) => {
    const data = await getEventById(eventId);
    console.log(data);
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
            + Add New Event
          </button>
        </div>
        <div className="events-list">
          {eventTypes.map((eventType) => (
            <div key={eventType._id} className="event-card" style={{ borderTop: `8px solid ${eventType.isDisabled ? '#000000' : '#007bff'}` }}>
              <h1>{eventType.isDisabled}</h1> 
              <BiEditAlt className="event-edit-icon" onClick={() => handleLoad(eventType._id)}/>
              <h3>{eventType.title}</h3>
              <p>{eventType.description}</p>
              <div className="event-details">
                <p>{eventType.date}</p>
                <p>{eventType.time}</p>
              </div>
              <div className="event-settings">
                <Switch
                  checked={eventType.isDisabled}
                  size="small"
                  className="disable-button-icon"
                  onChange={() => handleDisable(eventType._id)}
                />
                <FiCopy onClick={() => navigator.clipboard.writeText(eventType._id)} className="copy" />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleDeleteEvent(eventType._id)}
                  className="copy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
