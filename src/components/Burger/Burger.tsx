import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerDisplay.css';

interface Props {
    isBurgerOpen: boolean;
    setIsBurgerOpen: (isBurgerOpen: boolean) => void;
}

const Burger: FC<Props> = ({ isBurgerOpen, setIsBurgerOpen }) => {
    return (
        <div className={`burger-display flex column ${isBurgerOpen ? 'burger-active' : ''} `}>
            {isBurgerOpen && (
                <div className="burger-content flex column">
                    <div className="burger-links flex column">
                        <NavLink
                            to="la-bande"
                            className={({ isActive }) =>
                                isActive ? 'nav-effect-mobile' : undefined
                            }
                            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                        >
                            <p>LA BANDE</p>
                        </NavLink>
                        <NavLink
                            to="bande-demo"
                            className={({ isActive }) =>
                                isActive ? 'nav-effect-mobile' : undefined
                            }
                            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                        >
                            <p>BANDE DEMO</p>
                        </NavLink>
                        <NavLink
                            to="les-artistes"
                            className={({ isActive }) =>
                                isActive ? 'nav-effect-mobile' : undefined
                            }
                            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                        >
                            <p>LES ARTISTES</p>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Burger;