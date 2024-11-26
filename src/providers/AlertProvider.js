import { createContext, useContext, useState } from "react";

const AlertContext = createContext("AlertProvider");

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (title, status = "warning", timeout = 10000) => {
    // Add the alert
    const alert = { title, status };
    setAlerts((prev) => [...prev, alert]);

    // Schedule removal of the alert after the timeout
    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a !== alert));
    }, timeout);
  };

  const removeAlert = (index) =>
    setAlerts((prev) => prev.filter((_, i) => i !== index));

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlerts = () => useContext(AlertContext);
