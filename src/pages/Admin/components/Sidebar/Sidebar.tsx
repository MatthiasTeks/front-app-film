import { FC, ReactElement } from "react";
import { NavLink } from 'react-router-dom'
import { AiFillVideoCamera } from 'react-icons/ai'
import { MdRssFeed, MdDashboard } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { SiGoogleanalytics } from 'react-icons/si';

import Logo from '../../../../assets/logo.png';

import './Sidebar.css';

interface CustomNavLinkProps {
    to: string;
    icon: ReactElement;
    text: string;
}


const CustomNavLink = ({ to, icon, text }: CustomNavLinkProps) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? "link-active-admin" : undefined}
    >
        {icon}
        <p>{text}</p>
    </NavLink>
);

const Sidebar: FC = () => {
    return (
        <div className="nav-admin flex column">
            <img src={Logo} alt="company logo"/>
            <div className="holder-link-admin">
                <CustomNavLink to="/panel/dashboard" icon={<MdDashboard />} text="Dashboard" />
                <CustomNavLink to="/panel/project" icon={<AiFillVideoCamera />} text="Projets" />
                <CustomNavLink to="/panel/partner" icon={<FaHandshake />} text="Partenaires" />
                <CustomNavLink to="/panel/feed" icon={<MdRssFeed />} text="Feed" />
                <CustomNavLink to="/panel/newsletter" icon={<BiMailSend />} text="Newsletter" />
                <CustomNavLink to="/panel/analytics" icon={<SiGoogleanalytics />} text="Analytics" />
            </div>
        </div>
    )
}

export default Sidebar