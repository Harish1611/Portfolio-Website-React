import React, { useState, useEffect } from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className={`confirmation-popup ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
