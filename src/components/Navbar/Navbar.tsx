import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';

import Logo from '../../assets/logo_minia.png';
import LogoWhite from '../../assets/logo_minia_white.png';

import './Navbar.css';

interface Props {
    isBurgerOpen: boolean;
    setIsBurgerOpen: (open: boolean) => void;
}

const Navbar: FC<Props> = ({ isBurgerOpen, setIsBurgerOpen }) => {
    return (
        <div className="navbar flex row center justifyCenter">
            {/* LOGO */}
            <div className="holder-logo flex row justifyCenter center">
                <Link to="/" onClick={() => setIsBurgerOpen(false)}>
                    <img src={isBurgerOpen ? LogoWhite : Logo} alt=""/>
                </Link>
            </div>
            {/* LINKS */}
            <div id="navbar-links" className="flex row">
                <NavLink to="crew" className={({ isActive }) => isActive ? "link-active" : undefined}>
                    <div className="link-name">
                        <p>LA BANDE</p>
                    </div>
                </NavLink>
                <NavLink to="demo" className={({ isActive }) => isActive ? "link-active" : undefined}>
                    <div className="link-name">
                        <p>BANDE DEMO</p>
                    </div>
                </NavLink>
                <NavLink to="les-artistes" className={({ isActive }) => isActive ? "link-active" : undefined}>
                    <div className="link-name">
                        <p>LES ARTISTES</p>
                    </div>
                </NavLink>
            </div>
            {/* SOCIAL BLOCK */}
            <div className="navbar-social flex row center justifyEnd" id={isBurgerOpen ? "whited" : ""}>
                <a href="https://www.instagram.com/lesfilmsdelabande/" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                </a>
            </div>
            {/* BURGER BUTTON ON MOBILE */}
            <button className={`navbar-burger ${isBurgerOpen ? 'opened' : ""}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)} aria-label="Main Menu" aria-expanded={isBurgerOpen}>
                <svg width="50" height="50" viewBox="0 0 100 100">
                    <path className="burger-line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                    <path className="burger-line line2" d="M 20,50 H 80"/>
                    <path className="burger-line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
                </svg>
            </button>
        </div>
    )
}

export default Navbar