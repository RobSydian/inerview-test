import React, { useEffect } from "react";
import "../../styles/notification.css";

function Notification({ message, type = "success", duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const notificationElement = document.getElementById("notification");
      notificationElement.classList.remove("show");
      notificationElement.classList.add("d-none");
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [duration]);

  return (
    <div
      id="notification"
      className={`customAlert alert alert-${type} show`}
      role="alert"
    >
      {message}
    </div>
  );
}

export default Notification;
