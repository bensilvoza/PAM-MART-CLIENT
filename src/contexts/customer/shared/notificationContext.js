import { useState, createContext } from "react";

export const NotificationContext = createContext();

function NotificationContextProvider(props) {
  let [message, setMessage] = useState(undefined);
  let [color, setColor] = useState(undefined);
  let [border, setBorder] = useState(undefined);

  function handleInformation(
    notificationMessage,
    notificationColor,
    notificationBorder
  ) {
    setMessage(notificationMessage);
    setColor(notificationColor);
    setBorder(notificationBorder);
  }

  return (
    <NotificationContext.Provider
      value={{
        message,
        color,
        border,
        handleInformation,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContextProvider;
