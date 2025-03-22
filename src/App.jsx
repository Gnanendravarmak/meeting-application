import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login"; // Import for Login
import AvailabilitySettings from "./components/AvailabilitySettings/AvailabilitySettings"; // Import for AvailabilitySettings
import EventCreation from "./components/EventCreation/EventCreation"; // Import for EventCreation
import SettingsPage from "./components/SettingsPage/SettingsPage"; // New import for SettingsPage
import PublicEventPage from "./components/PublicEventPage/PublicEventPage"; // New import for PublicEventPage
import "./App.css";
import Preferences from "./components/Preferences/Preferences";
import CreateEvent from "./components/CreateEvent/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/availability-settings"
          element={<AvailabilitySettings />}
        />
        <Route path="/event-creation" element={<EventCreation />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/event/:id" element={<PublicEventPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
