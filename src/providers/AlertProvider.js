import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (title, status = "info", timeout = 10000) => {
    const alert = { id: Date.now(), title, status, fading: false };
    setAlerts((prev) => [...prev, alert]);

    // Schedule fade-out and removal
    setTimeout(() => fadeOutAlert(alert.id), timeout - 500); // Start fade-out 500ms before removal
    setTimeout(() => removeAlert(alert.id), timeout);
  };

  const fadeOutAlert = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, fading: true } : alert
      )
    );
  };

  const removeAlert = (id) =>
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlerts = () => useContext(AlertContext);
