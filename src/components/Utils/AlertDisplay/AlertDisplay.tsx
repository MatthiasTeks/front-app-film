import React, { useContext, useEffect } from "react";
import { AlertContext } from "../../../contexts/AlertContext";
import './AlertDisplay.css';

const AlertDisplay: React.FC = () => {
    const { alerts, removeAlert } = useContext(AlertContext);

    useEffect(() => {
        if (alerts.length > 0) {
            const timeout = setTimeout(() => {
                removeAlert(alerts[0]);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [alerts, removeAlert]);

    console.log(alerts)
    return (
        <div className="alert-container">
            {alerts.map((alert, index) => (
                <div
                    key={index}
                    className={`alert alert-${alert.type}`}
                >
                    {alert.message}
                </div>
            ))}
        </div>
    );
};

export default AlertDisplay;