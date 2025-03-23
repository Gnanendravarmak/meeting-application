import axios from 'axios';
import Popup from '../components/Popup/Popup';

const BASE_URL = 'http://localhost:8080/api';

// API endpoint for signup
export const signup = async (firstname, lastname, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, {
      firstname,
      lastname,
      email,
      password,
    });
    localStorage.setItem('token', response.data); // Store token in local storage
    return response.data; // Return the entire response data
  } catch (error) {
    console.log(error);
    throw new Error('Signup failed: ' + error.response.data.message);
  }
};

// API endpoint for login
export const login = async (email, password, showPopup) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    localStorage.setItem('token', response.data.token); // Store token in local storage
    localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user object in local storage
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.response.data.message);
  }
};

// API endpoint for creating a new event
export const createEvent = async (eventData, showPopup) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${BASE_URL}/events`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    showPopup('Event creation failed: ' + error.response.data.message); // Display error message using Popup
    throw new Error('Event creation failed: ' + error.response.data.message);
  }
};

// API endpoint for getting all events
export const getEvents = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw new Error('Failed to fetch events: ' + error.response.data.message);
  }
};

// API endpoint for updating an event by ID
export const updateEvent = async (id, eventData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${BASE_URL}/events/${id}`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw new Error('Event update failed: ' + error.response.data.message);
  }
};

// API endpoint for deleting an event by ID
export const deleteEvent = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${BASE_URL}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw new Error('Event deletion failed: ' + error.response.data.message);
  }
};

export const getEventById = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${BASE_URL}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    throw new Error('Failed to fetch event: ' + error.response.data.message);
  }
};

export const disableEvent = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.patch(`${BASE_URL}/events/disable/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response?.data;
  } catch (error) {
    throw new Error('Event disable failed: ' + error.response.data.message);
  }
}
