import React, { createContext, useState } from "react";

interface Alert {
    message: string;
    type: "success" | "warning" | "error";
}

interface AlertContextProps {
    alerts: Alert[];
    addAlert: (alert: Alert) => void;
    removeAlert: (alert: Alert) => void;
}

export const AlertContext = createContext<AlertContextProps>({
    alerts: [],
    addAlert: () => {},
    removeAlert: () => {}
});

interface AlertProviderProps {
    children: React.ReactNode;
}

export const AlertContextProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    const addAlert = (alert: Alert) => {
        setAlerts((prevState) => [...prevState, alert]);
    };

    const removeAlert = (alert: Alert) => {
        setAlerts((prevState) => prevState.filter(a => a !== alert));
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};