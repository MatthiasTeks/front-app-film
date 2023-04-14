import { FC } from "react";
import { Outlet } from 'react-router-dom';

import Sidebar from "./components/Sidebar/Sidebar";

import './Admin.css';


const Admin: FC = () => {

    return (
        <div className="panel-admin flex row">
            <Sidebar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin

