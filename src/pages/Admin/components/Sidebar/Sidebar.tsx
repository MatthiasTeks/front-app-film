import { FC } from "react";
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { AiFillVideoCamera } from 'react-icons/ai'
import { MdUpdate } from 'react-icons/md'
import './Sidebar.css';


const Sidebar: FC = () => {
    return (
        <div className="nav-admin flex column">
            <Link to="/panel-admin"><MdDashboard /><h2>Dashboard</h2></Link>
            <Link to="/panel-admin/projet-admin"><AiFillVideoCamera /><h2>Ajout Projet</h2></Link>
            <Link to="/panel-admin/update-admin"><MdUpdate /><h2>Update Projet</h2></Link>
        </div>
    )
}

export default Sidebar