import React, { useContext } from "react";
import { AlertContext } from "../../../contexts/AlertContext";
import './AlertDisplay.css';

const AlertDisplay: React.FC = () => {
    const { alerts } = useContext(AlertContext);

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