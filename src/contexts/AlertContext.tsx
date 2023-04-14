import React, { createContext, useState } from "react";

interface Alert {
    message: string;
    type: "success" | "warning" | "error";
}

interface AlertContextProps {
    alerts: Alert[];
    addAlert: (alert: Alert) => void;
}

export const AlertContext = createContext<AlertContextProps>({
    alerts: [],
    addAlert: () => {},
});

interface AlertProviderProps {
    children: React.ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    const addAlert = (alert: Alert) => {
        setAlerts((prevState) => [...prevState, alert]);
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;