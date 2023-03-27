import { useState, createContext, FC } from 'react';
import { Outlet } from 'react-router-dom';

import { useDataWithLoading } from './services/api/common';

import Navbar from "./components/Navbar/Navbar";

import 'react-loading-skeleton/dist/skeleton.css';
import './utils/Keyframes.css';
import './App.css';
import Footer from "./components/Footer/Footer";

interface Project {
    id: string;
    title: string;
    description: string;
    year: number;
    images: {
        url: string;
        formats: {
            thumbnail: {
                url: string;
            };
        };
    }[];
}

export const ProjectContext = createContext<Project[] | null>(null);

const App: FC = () => {
    const { data, error, isLoading, isError } = useDataWithLoading('projet');
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <ProjectContext.Provider value={data}>
            <Navbar isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
            <Outlet context={[isBurgerOpen, setIsBurgerOpen]} />
            <Footer isNewsletterOpen={isNewsletterOpen} setIsNewsletterOpen={setIsNewsletterOpen} />
        </ProjectContext.Provider>
    );
};

export default App;