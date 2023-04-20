import { FC } from "react";
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { AiFillVideoCamera } from 'react-icons/ai'
import { MdUpdate } from 'react-icons/md'
import './Sidebar.css';


const Sidebar: FC = () => {
    return (
        <div className="nav-admin flex column">
            <Link to="/panel/dashboard"><MdDashboard /><h2>dashboard</h2></Link>
            <Link to="/panel/project"><AiFillVideoCamera /><h2>projets</h2></Link>
            <Link to="/panel/partner"><MdUpdate /><h2>partenaire</h2></Link>
            <Link to="/panel/feed"><MdUpdate /><h2>feed</h2></Link>
            <Link to="/panel/newsletter"><MdUpdate /><h2>newsletter</h2></Link>
            <Link to="/panel/analytics"><MdUpdate /><h2>analytics</h2></Link>
        </div>
    )
}

export default Sidebar