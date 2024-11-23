import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa'; // Example icons from react-icons

export const notify = (message, type = 'success') => {
  let icon;

  switch (type) {
    case 'success':
      icon = <FaCheckCircle style={{ color: 'green' }} />;
      break;
    case 'error':
      icon = <FaExclamationTriangle style={{ color: 'red' }} />;
      break;
    case 'info':
      icon = <FaInfoCircle style={{ color: 'blue' }} />;
      break;
    default:
      icon = <FaInfoCircle style={{ color: 'gray' }} />;
      break;
  }

  toast.success(message, {
    position: "top-right", // Position of the toast
    autoClose: 3000, // Auto close in 3 seconds
    hideProgressBar: false, // Show progress bar
    closeOnClick: true, // Close on click
    pauseOnHover: true, // Pause on hover
    draggable: true, // Allow dragging
    progress: undefined, // Progress bar
    icon:icon
  });
};
