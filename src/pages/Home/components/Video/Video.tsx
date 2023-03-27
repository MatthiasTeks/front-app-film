import { FC } from "react";
import { Link } from 'react-router-dom';

import { useDataWithLoading } from "../../../../services/api/common";

import Button from '../../../../components/Button/Button.jsx';

import './Video.css';

interface Movie {
    poster: string;
    lien: string;
}

const Video: FC = () => {
    const { data, isLoading } = useDataWithLoading("home/media");
    const movie: Movie[] = data ?? [];

    const renderMoviePlayer = () => (
        <video autoPlay muted loop id="home-movie" poster={movie[0].poster}>
            <source src={movie[0].lien} type="video/webm"/>
        </video>
    );

    return (
        <div className="home-video">
            { !isLoading && renderMoviePlayer() }
            <div className="home-video-content flex column center justifyCenter">
                <h1>CREATION DE BANDES DEMOS SUR MESURE</h1>
                <Link to="bande-demo">
                    <Button isWhite={true} text="En savoir plus" />
                </Link>
            </div>
            <div className="home-video-scrolling flex column center justifyCenter">
                <div className="scroller flex column center">
                    <hr className="shine-effect"/>
                    <p className="shine-effect">scroll</p>
                </div>
            </div>
        </div>
    )
}

export default Video;