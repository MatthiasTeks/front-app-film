import { FC } from 'react';

import {UpdateBackground} from "./components/UpdateBackground/UpdateBackground";
import {UpdateHighlight} from "./components/UpdateHighlight/UpdateHighlight";

import './Dashboard.css';

const Dashboard: FC = () => {
    return (
        <div className="dashboard">
            <h1>PANEL ADMINISTRATEUR</h1>
            <h2>Dashboard</h2>
            <UpdateBackground />
            <UpdateHighlight />
        </div>
    )
}

export default Dashboard