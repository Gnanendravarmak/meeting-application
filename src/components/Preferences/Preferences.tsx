import React, { useState } from 'react';
import './Preferences.css';
import signupImage from "../../assets/sign.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faGraduationCap, faDollarSign, faBuilding, faUsers, faBriefcase, faLaptopCode, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Preferences: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { name: 'Sales', icon: faChartBar },
    { name: 'Education', icon: faGraduationCap },
    { name: 'Finance', icon: faDollarSign },
    { name: 'Government & Politics', icon: faBuilding },
    { name: 'Consulting', icon: faUsers },
    { name: 'Recruiting', icon: faBriefcase },
    { name: 'Tech', icon: faLaptopCode },
    { name: 'Marketing', icon: faBullhorn }
  ];

  return (
    <div className="preferences-container">
      {/* Image on the Right */}
      <img
        src={signupImage}
        alt="Signup Illustration"
        className="preference-image"
      />
      
      {/* Content in the Middle */}
      <div className="preferences-content">
        <h1>Your Preferences</h1>
        <input
          type="text"
          placeholder="Tell us your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="preferences-input"
        />
        <p>Select one category that best describes your CNNCT:</p>
        <div className="preferences-categories">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`preferences-button ${selectedCategory === category.name ? 'selected' : ''}`}
            >
              <FontAwesomeIcon icon={category.icon} style={{ marginRight: '8px' }} />
              {category.name}
            </button>
          ))}
        </div>
        <button className="preferences-continue-button" disabled={!username || !selectedCategory}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Preferences;