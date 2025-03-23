import React, { useEffect, useState } from "react";
import "./Popup.css"; // Assuming a CSS file for styling

const Popup = ({ message, onClose, type, duration = 3000 }) => {
  const [show, setShow] = useState(false);
  console.log(message);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 500); // Wait for the fade-out transition to complete
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`popup ${show ? 'show' : ''} ${type === 'success' ? 'popup-success' : 'popup-error'}`}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
