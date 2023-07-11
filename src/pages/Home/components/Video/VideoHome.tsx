import { FC } from "react";
import { Link } from 'react-router-dom';
import { useDataWithLoading } from "../../../../services/api/fetch";
import { Button } from '../../../../components/Button/Button.js';
import DefaultVideo from '../../../../assets/default_home_video.mp4';
import Skeleton from "react-loading-skeleton";
import './VideoHome.css';
import { Scroller } from "../../../../components/Scroller/Scroller";

export const VideoHome: FC = () => {
    const { data, isLoading } = useDataWithLoading("background");

    const renderMoviePlayer = () => {
        if(isLoading){
            return <Skeleton className="home-movie" />
        } else {
            return (
                <video autoPlay muted loop className="home-movie">
                    <source
                        src={data ? data : DefaultVideo}
                        type="video/mp4"
                    />
                </video>
            )
        }
    }

    return (
        <div className="home-video">
            {renderMoviePlayer()}
            <div className="home-video-content flex column center justifyCenter">
                <h1>CREATION DE BANDES DEMOS SUR MESURE</h1>
                <Link to="bande-demo">
                    <Button category="tertiary-btn" text="En savoir plus" />
                </Link>
            </div>
            <div className="home-video-scrolling flex column center justifyCenter">
                <Scroller />
            </div>
        </div>
    )
}