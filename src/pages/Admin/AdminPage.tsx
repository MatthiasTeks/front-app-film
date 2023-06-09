import { FC } from "react";
import { Outlet } from 'react-router-dom';

import Sidebar from "./components/Sidebar/Sidebar";
import './AdminPage.css';


export const AdminPage: FC = () => {

    return (
        <div className="panel-admin flex row">
            <Sidebar />
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    )
}

