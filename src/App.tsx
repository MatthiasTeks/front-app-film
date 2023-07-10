import { useState, createContext, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Project } from "./interfaces/Interface";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';

export const ProjectContext = createContext<Project[] | null>(null);

export const App: FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const [isNewsletterOpen, setIsNewsletterOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
            <Outlet context={[isBurgerOpen, setIsBurgerOpen]} />
            <Footer isNewsletterOpen={isNewsletterOpen} />
        </>
    );
};