import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventCreation from "./components/EventCreation/EventCreation";
import Settings from "./components/Settings/Settings";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import EventCreation from "./components/EventCreation/EventCreation";
import EventList from "./components/EventList/EventList";
import EventDetails from "./components/EventDetails/EventDetails";
import Settings from "./components/Settings/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<EventCreation />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
