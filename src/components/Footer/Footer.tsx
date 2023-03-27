import { FC } from 'react'
import { Link } from "react-router-dom";

import './Footer.css';

interface Props {
    isNewsletterOpen: boolean;
    setIsNewsletterOpen: (open: boolean) => void;
}

const Footer: FC<Props> = ({isNewsletterOpen, setIsNewsletterOpen}) => {
    return (
        <div className="footer-holder flex column justifyCenter">
            <div className="footer flex row justifyBetween">
                <div className="footer-nav flex column justifyStart">
                    <Link to="mentions-legales">MENTIONS LEGALES</Link>
                    <p onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}>NEWSLETTER</p>
                    <p>CONTACT</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
