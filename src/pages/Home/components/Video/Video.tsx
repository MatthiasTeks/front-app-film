import { FC } from "react";
import { Link } from 'react-router-dom';

import { useDataWithLoading } from "../../../../services/api/common";

import Button from '../../../../components/Button/Button.jsx';

import DefaultVideo from '../../../../assets/default_home_video.mp4';
import './Video.css';

interface Movie {
    id_home_media: number;
    s3_video_key: string;
}

const Video: FC = () => {
    const { data, isLoading } = useDataWithLoading("home/media");
    const movie: Movie[] = data ?? [];

    const renderMoviePlayer = () => (
        <video autoPlay muted loop id="home-movie">
            <source
                src={movie.length ? movie[0].s3_video_key : DefaultVideo}
                type="video/mp4"
            />
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