import React from "react";
import "./ToastMessage.css";

const ToastMessage = ({ message }) => {
  return (
    <div className="toast-message">
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;
